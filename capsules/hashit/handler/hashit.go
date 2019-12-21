package handler

import (
	"context"

	"hashit/lib"
	hashit "hashit/proto/hashit"
)

// Hashit implements the RPC service
type Hashit struct{}

// Crypt is a single request handler called via client.Call or the generated client code
func (e *Hashit) Crypt(ctx context.Context, req *hashit.Request, rsp *hashit.Response) error {
	p := &hasher.Params{
		Memory:      64 * 1024,
		Iterations:  3,
		Parallelism: 2,
		SaltLength:  16,
		KeyLength:   32,
	}
	hash, err := hasher.GenerateHash(req.Value, p)
	if err != nil {
		return err
	}
	rsp.Hash = hash
	return nil
}
