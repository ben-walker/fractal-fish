package hasher

import (
	"crypto/rand"
	"encoding/base64"
	"fmt"

	"golang.org/x/crypto/argon2"
)

const encodingFormat = "$argon2id$v=%d$m=%d,t=%d,p=%d$%s$%s"

// Params passed to argon2
type Params struct {
	Memory      uint32
	Iterations  uint32
	Parallelism uint8
	SaltLength  uint32
	KeyLength   uint32
}

// GenerateHash produces a hashed version of a plain string
func GenerateHash(plain string, p *Params) (encodedHash string, err error) {
	salt, err := generateBytes(p.SaltLength)
	if err != nil {
		return "", err
	}
	hash := argon2.IDKey([]byte(plain), salt, p.Iterations, p.Memory, p.Parallelism, p.KeyLength)
	encodedHash = encode(salt, hash, p)
	return encodedHash, nil
}

func encode(salt, hash []byte, p *Params) string {
	b64Salt := bytesToBase64(salt)
	b64Hash := bytesToBase64(hash)
	encoded := fmt.Sprintf(encodingFormat, argon2.Version, p.Memory, p.Iterations, p.Parallelism, b64Salt, b64Hash)
	return encoded
}

func bytesToBase64(b []byte) string {
	b64 := base64.RawStdEncoding.EncodeToString(b)
	return b64
}

func generateBytes(n uint32) (bytes []byte, err error) {
	bytes = make([]byte, n)
	if _, err := rand.Read(bytes); err != nil {
		return nil, err
	}
	return bytes, nil
}
