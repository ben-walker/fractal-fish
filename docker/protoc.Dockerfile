# Protoc is an image containing all the tools needed to compile
# protobuf files for go-micro consumption
FROM golang:1.13-alpine

# Install protoc
RUN apk add --no-cache unzip curl git && \
  PROTOC_ZIP=protoc-3.7.1-linux-x86_64.zip && \
  curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.7.1/$PROTOC_ZIP && \
  unzip -o $PROTOC_ZIP -d /usr/local bin/protoc && \
  unzip -o $PROTOC_ZIP -d /usr/local 'include/*' && \
  rm -f $PROTOC_ZIP

# Install protoc plugins
RUN go get github.com/micro/protoc-gen-micro && \
  go get github.com/golang/protobuf/protoc-gen-go
