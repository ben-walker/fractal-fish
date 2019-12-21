package handler

import (
	"context"

	"github.com/micro/go-micro/util/log"

	auth "auth/proto/auth"
)

// Auth implements the RPC service
type Auth struct{}

// Check is a request handler to verify user credentials
func (e *Auth) Check(ctx context.Context, req *auth.Request, rsp *auth.Response) error {
	log.Log(req)
	return nil
}
