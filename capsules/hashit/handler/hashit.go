package handler

import (
	"context"

	hasher "hashit/lib"
	hashit "hashit/proto/hashit"
)

// Hashit implements the RPC service
type Hashit struct{}

var hashParameters = &hasher.Params{
	Memory:      64 * 1024,
	Iterations:  3,
	Parallelism: 2,
	SaltLength:  16,
	KeyLength:   32,
}

// Encode is a single request handler called via client.Call or the generated client code
func (e *Hashit) Encode(ctx context.Context, req *hashit.EncodeRequest, rsp *hashit.EncodeResponse) error {
	hash, err := hasher.GenerateHash(req.Value, hashParameters)
	if err != nil {
		return err
	}
	rsp.EncodedHash = hash
	return nil
}

// Compare determines whether an unhashed value matches an encoded hash
func (e *Hashit) Compare(ctx context.Context, req *hashit.CompareRequest, rsp *hashit.CompareResponse) error {
	match, err := hasher.TestHashMatch(req.Value, req.EncodedHash)
	if err != nil {
		return err
	}
	rsp.Match = match
	return nil
}
