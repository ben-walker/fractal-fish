###### Compile Protobuf Code ######
FROM fractalfish/protoc:ac04acb659cf5b8217eb37e317adccb6033650c4 as protocomp

WORKDIR /proto

COPY proto/*.proto ./

RUN protoc --proto_path=$GOPATH/src:. --micro_out=. --go_out=. *.proto

###### Build Binary ######
FROM golang:1.13-buster as builder

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

COPY --from=protocomp /proto/*.go ./proto/

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -ldflags '-w' -i -o micro *.go

###### Expose App ######
FROM scratch

WORKDIR /app

COPY --from=builder /app/micro .

EXPOSE 8080

ENTRYPOINT [ "./micro" ]
