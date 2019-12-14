set -e
# set -o nounset
# set -o errexit
# set -o pipefail

ROOT="./capsules" 
REPOSITORY_TYPE="github"
CIRCLE_API="https://circleci.com/api"

#
# Commit SHA of last CI build
#
LAST_COMPLETED_BUILD_URL="${CIRCLE_API}/v1.1/project/${REPOSITORY_TYPE}/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}/tree/${CIRCLE_BRANCH}?filter=completed&limit=100&shallow=true"
LAST_COMPLETED_BUILD_SHA=`curl -Ss -u "${CIRCLE_TOKEN}:" "${LAST_COMPLETED_BUILD_URL}" | jq -r 'map(select(.status == "success") | select(.workflows.workflow_name != "ci")) | .[0]["vcs_revision"]'`

echo "${LAST_COMPLETED_BUILD_URL}"
echo "${LAST_COMPLETED_BUILD_SHA}"

if  [[ ${LAST_COMPLETED_BUILD_SHA} == "null" ]]; then
  echo "There are no completed CI builds in branch ${CIRCLE_BRANCH}."

  TREE=$(git show-branch -a \
    | grep '\*' \
    | grep -v `git rev-parse --abbrev-ref HEAD` \
    | sed 's/.*\[\(.*\)\].*/\1/' \
    | sed 's/[\^~].*//' \
    | uniq)

  echo "${TREE}"

  REMOTE_BRANCHES=$(git branch -r | sed 's/\s*origin\///' | tr '\n' ' ')
  PARENT_BRANCH=master
  echo "${REMOTE_BRANCHES}"
  for BRANCH in ${TREE[@]}
  do
    BRANCH=${BRANCH#"origin/"}
    if [[ " ${REMOTE_BRANCHES[@]} " == *" ${BRANCH} "* ]]; then
      echo "Found the parent branch: ${CIRCLE_BRANCH}..${BRANCH}"
      PARENT_BRANCH=$BRANCH
      break
    fi
  done

  echo "Searching for CI builds in branch '${PARENT_BRANCH}'..."

  LAST_COMPLETED_BUILD_URL="${CIRCLE_API}/v1.1/project/${REPOSITORY_TYPE}/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}/tree/${PARENT_BRANCH}?filter=completed&limit=100&shallow=true"
  LAST_COMPLETED_BUILD_SHA=`curl -Ss -u "${CIRCLE_TOKEN}:" "${LAST_COMPLETED_BUILD_URL}" \
    | jq -r "map(\
      select(.status == \"success\") | select(.workflows.workflow_name != \"ci\") | select(.build_num < ${CIRCLE_BUILD_NUM})) \
    | .[0][\"vcs_revision\"]"`
fi

if [[ ${LAST_COMPLETED_BUILD_SHA} == "null" ]]; then
  echo -e "No CI builds for branch ${PARENT_BRANCH}. Using master."
  LAST_COMPLETED_BUILD_SHA=master
fi

#
# 2. Changed packages
#
PACKAGES=$(ls ${ROOT} -l | grep ^d | awk '{print $9}')
echo "Searching for changes since commit [${LAST_COMPLETED_BUILD_SHA:0:7}]..."

# The CircleCI API parameters object
PARAMETERS='"trigger":false'
COUNT=0
for PACKAGE in ${PACKAGES[@]}
do
  PACKAGE_PATH=${ROOT#.}/$PACKAGE
  LATEST_COMMIT_SINCE_LAST_BUILD=$(git log -1 $CIRCLE_SHA1 ^$LAST_COMPLETED_BUILD_SHA --format=format:%H --full-diff ${PACKAGE_PATH#/})

  if [[ -z "$LATEST_COMMIT_SINCE_LAST_BUILD" ]]; then
    echo -e "  [-] $PACKAGE"
  else
    PARAMETERS+=", \"$PACKAGE\":true"
    COUNT=$((COUNT + 1))
    echo -e "  [+] ${PACKAGE} (changed in [${LATEST_COMMIT_SINCE_LAST_BUILD:0:7}])"
  fi
done

if [[ $COUNT -eq 0 ]]; then
  echo -e "No changes detected in packages. Skipping workflow trigger."
  exit 0
fi

echo "Changes detected in ${COUNT} package(s)."

#
# 3. CicleCI REST API call
#
DATA="{ \"branch\": \"$CIRCLE_BRANCH\", \"parameters\": { $PARAMETERS } }"
echo "Triggering pipeline with data:"
echo -e "  $DATA"

URL="${CIRCLE_API}/v2/project/${REPOSITORY_TYPE}/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}/pipeline"
HTTP_RESPONSE=$(curl -s -u ${CIRCLE_TOKEN}: -o response.txt -w "%{http_code}" -X POST --header "Content-Type: application/json" -d "$DATA" $URL)

if [ "$HTTP_RESPONSE" -ge "200" ] && [ "$HTTP_RESPONSE" -lt "300" ]; then
  echo "API call succeeded."
  echo "Response:"
  cat response.txt
else
  echo -e "Received status code: ${HTTP_RESPONSE}"
  echo "Response:"
  cat response.txt
  exit 1
fi
