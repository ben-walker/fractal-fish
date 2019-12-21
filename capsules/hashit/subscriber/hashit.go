package subscriber

import (
	"context"
	"github.com/micro/go-micro/util/log"

	hashit "hashit/proto/hashit"
)

type Hashit struct{}

func (e *Hashit) Handle(ctx context.Context, msg *hashit.Message) error {
	log.Log("Handler Received message: ", msg.Say)
	return nil
}

func Handler(ctx context.Context, msg *hashit.Message) error {
	log.Log("Function Received message: ", msg.Say)
	return nil
}
