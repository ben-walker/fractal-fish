package handler

import (
	"context"

	"github.com/micro/go-micro/util/log"

	hashit "hashit/proto/hashit"
)

// Hashit implements the RPC service
type Hashit struct{}

// Crypt is a single request handler called via client.Call or the generated client code
func (e *Hashit) Crypt(ctx context.Context, req *hashit.Request, rsp *hashit.Response) error {
	log.Log("Received Hashit.Crypt request")
	rsp.Hashed = req.Value
	return nil
}
