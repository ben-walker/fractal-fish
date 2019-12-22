package handler

import (
	"context"

	hasher "hashit/lib"
	hashit "hashit/proto/hashit"
)

// Hashit implements the RPC service
type Hashit struct{}

// Encode is a single request handler called via client.Call or the generated client code
func (e *Hashit) Encode(ctx context.Context, req *hashit.EncodeRequest, rsp *hashit.EncodeResponse) error {
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
	rsp.EncodedHash = hash
	return nil
}
