package main

import (
	"github.com/micro/go-micro/util/log"
	"github.com/micro/go-micro"
	"hashit/handler"
	"hashit/subscriber"

	hashit "hashit/proto/hashit"
)

func main() {
	// New Service
	service := micro.NewService(
		micro.Name("go.micro.srv.hashit"),
		micro.Version("latest"),
	)

	// Initialise service
	service.Init()

	// Register Handler
	hashit.RegisterHashitHandler(service.Server(), new(handler.Hashit))

	// Register Struct as Subscriber
	micro.RegisterSubscriber("go.micro.srv.hashit", service.Server(), new(subscriber.Hashit))

	// Register Function as Subscriber
	micro.RegisterSubscriber("go.micro.srv.hashit", service.Server(), subscriber.Handler)

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
