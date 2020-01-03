package main

import (
	"auth/handler"

	"github.com/micro/go-micro"
	"github.com/micro/go-micro/util/log"

	auth "auth/proto"
)

func main() {
	service := micro.NewService(
		micro.Name("go.micro.srv.auth"),
		micro.Version("0.0.0"),
	)
	service.Init()
	auth.RegisterAuthHandler(service.Server(), new(handler.Auth))
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
