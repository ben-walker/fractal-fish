# Protoc is an image containing all the tools needed to compile
# protobuf files for go-micro consumption
FROM golang:1.13-alpine

# Install protoc plugins
RUN apk add --no-cache protoc git && \
  go get github.com/micro/protoc-gen-micro && \
  go get github.com/golang/protobuf/protoc-gen-go
