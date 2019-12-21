package hasher

import (
	"crypto/rand"

	"golang.org/x/crypto/argon2"
)

// Params passed to argon2
type Params struct {
	Memory      uint32
	Iterations  uint32
	Parallelism uint8
	SaltLength  uint32
	KeyLength   uint32
}

// GenerateHash produces a hashed version of plain string
func GenerateHash(plain string, p *Params) ([]byte, error) {
	salt, err := generateBytes(p.SaltLength)
	if err != nil {
		return nil, err
	}
	hash := argon2.IDKey([]byte(plain), salt, p.Iterations, p.Memory, p.Parallelism, p.KeyLength)
	return hash, nil
}

func generateBytes(n uint32) ([]byte, error) {
	bytes := make([]byte, n)
	if _, err := rand.Read(bytes); err != nil {
		return nil, err
	}
	return bytes, nil
}
