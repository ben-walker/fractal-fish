FROM golang:1.13-alpine as protocomp

# Install sudo, add user 'compiler' to sudoers group
RUN apk update && \
  apk add --no-cache sudo unzip && \
  useradd -m compiler && \
  echo "compiler:compiler" | chpasswd && \
  adduser compiler sudo

# Install protoc
RUN PROTOC_ZIP=protoc-3.7.1-linux-x86_64.zip && \
  curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.7.1/$PROTOC_ZIP && \
  echo "compiler" | sudo -S unzip -o $PROTOC_ZIP -d /usr/local bin/protoc && \
  echo "compiler" | sudo -S unzip -o $PROTOC_ZIP -d /usr/local 'include/*' && \
  rm -f $PROTOC_ZIP

# Install protoc plugins
RUN go get github.com/micro/protoc-gen-micro && \
  go get github.com/golang/protobuf/protoc-gen-go
