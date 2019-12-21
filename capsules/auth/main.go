package main

import (
	"auth/handler"
	"auth/subscriber"

	"github.com/micro/go-micro"
	"github.com/micro/go-micro/util/log"

	auth "auth/proto/auth"
)

func main() {
	service := micro.NewService(
		micro.Name("go.micro.srv.auth"),
		micro.Version("0.0.0"),
	)
	service.Init()

	auth.RegisterAuthHandler(service.Server(), new(handler.Auth))
	micro.RegisterSubscriber("go.micro.srv.auth", service.Server(), new(subscriber.Auth))
	micro.RegisterSubscriber("go.micro.srv.auth", service.Server(), subscriber.Handler)

	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
