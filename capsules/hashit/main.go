package main

import (
	"hashit/handler"

	"github.com/micro/go-micro"
	"github.com/micro/go-micro/util/log"

	hashit "hashit/proto/hashit"
)

func main() {
	service := micro.NewService(
		micro.Name("go.micro.srv.hashit"),
		micro.Version("0.0.0"),
	)
	service.Init()
	hashit.RegisterHashitHandler(service.Server(), new(handler.Hashit))
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
