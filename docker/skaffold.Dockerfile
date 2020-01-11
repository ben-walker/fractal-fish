# Skaffold is an image containing the k8s skaffold tool
FROM alpine:3.11

RUN apk add --no-cache curl git && \
  curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64 && \
  chmod +x skaffold && \
  mv skaffold /usr/local/bin
