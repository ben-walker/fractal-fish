package main

import (
	_ "github.com/micro/go-plugins/broker/grpc"
	_ "github.com/micro/go-plugins/registry/kubernetes"
	_ "github.com/micro/go-plugins/store/redis"
	_ "github.com/micro/go-plugins/transport/grpc"
)
