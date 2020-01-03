package main

import (
	"github.com/micro/go-micro/util/log"
	"github.com/micro/go-micro"
	"auth/handler"
	"auth/subscriber"

	auth "auth/proto/auth"
)

func main() {
	// New Service
	service := micro.NewService(
		micro.Name("go.micro.srv.auth"),
		micro.Version("latest"),
	)

	// Initialise service
	service.Init()

	// Register Handler
	auth.RegisterAuthHandler(service.Server(), new(handler.Auth))

	// Register Struct as Subscriber
	micro.RegisterSubscriber("go.micro.srv.auth", service.Server(), new(subscriber.Auth))

	// Register Function as Subscriber
	micro.RegisterSubscriber("go.micro.srv.auth", service.Server(), subscriber.Handler)

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
