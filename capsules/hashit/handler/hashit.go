package handler

import (
	"context"

	"github.com/micro/go-micro/util/log"

	hashit "hashit/proto/hashit"
)

type Hashit struct{}

// Call is a single request handler called via client.Call or the generated client code
func (e *Hashit) Call(ctx context.Context, req *hashit.Request, rsp *hashit.Response) error {
	log.Log("Received Hashit.Call request")
	rsp.Msg = "Hello " + req.Name
	return nil
}

// Stream is a server side stream handler called via client.Stream or the generated client code
func (e *Hashit) Stream(ctx context.Context, req *hashit.StreamingRequest, stream hashit.Hashit_StreamStream) error {
	log.Logf("Received Hashit.Stream request with count: %d", req.Count)

	for i := 0; i < int(req.Count); i++ {
		log.Logf("Responding: %d", i)
		if err := stream.Send(&hashit.StreamingResponse{
			Count: int64(i),
		}); err != nil {
			return err
		}
	}

	return nil
}

// PingPong is a bidirectional stream handler called via client.Stream or the generated client code
func (e *Hashit) PingPong(ctx context.Context, stream hashit.Hashit_PingPongStream) error {
	for {
		req, err := stream.Recv()
		if err != nil {
			return err
		}
		log.Logf("Got ping %v", req.Stroke)
		if err := stream.Send(&hashit.Pong{Stroke: req.Stroke}); err != nil {
			return err
		}
	}
}
