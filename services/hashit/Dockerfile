###### Compile Protobuf Code ######
FROM golang:latest as protocomp

# Install sudo, add user 'compiler' to sudoers group
RUN apt-get update && \
  apt-get -y install sudo unzip && \
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

# Set up working directory
RUN mkdir -p /proto && \
  chown compiler:compiler /proto
USER compiler
RUN who
WORKDIR /proto
COPY proto/*.proto ./

# Generate protobuf code
RUN protoc --proto_path=$GOPATH/src:. --micro_out=. --go_out=. *.proto

###### Create Dependency Layer ######
FROM golang:latest

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

###### Build Service Image ######
FROM golang:latest

ENV GO111MODULE=on

WORKDIR /app

COPY . .

COPY --from=protocomp /proto/*.go ./proto/

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -ldflags '-w' -i -o micro *.go

EXPOSE 8080

ENTRYPOINT [ "./micro" ]