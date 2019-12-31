package hasher

import (
	"crypto/rand"
	"crypto/subtle"
	"encoding/base64"

	"github.com/simia-tech/crypt"
)

// Params passed to argon2
type Params struct {
	Memory      int
	Iterations  int
	Parallelism int
	SaltLength  int
}

// GenerateHash produces a hashed version of a plain string
func GenerateHash(plain string, p *Params) (encodedHash string, err error) {
	salt, err := generateSalt(p.SaltLength)
	if err != nil {
		return "", err
	}
	settings, err := crypt.Argon2idSettings(p.Memory, p.Iterations, p.Parallelism, salt)
	if err != nil {
		return "", err
	}
	encodedHash, err = crypt.Crypt(plain, settings)
	if err != nil {
		return "", err
	}
	return encodedHash, nil
}

func generateSalt(n int) (string, error) {
	bytes := make([]byte, n)
	if _, err := rand.Read(bytes); err != nil {
		return "", err
	}
	return bytesToString(bytes), nil
}

func bytesToString(b []byte) string {
	return base64.RawStdEncoding.EncodeToString(b)
}

// WasHashed checks if a plain value was used in an encoded hash
func WasHashed(value, encodedHash string) (match bool, err error) {
	newHash, err := crypt.Crypt(value, encodedHash) // Use the original hash as a settings string
	if err != nil {
		return false, err
	}
	hashBytes, newHashBytes := []byte(encodedHash), []byte(newHash)
	isLenEqual := subtle.ConstantTimeEq(int32(len(hashBytes)), int32(len(newHashBytes))) == 1
	if !isLenEqual {
		return false, nil
	}
	isContentEqual := subtle.ConstantTimeCompare(hashBytes, newHashBytes) == 1
	return isContentEqual, nil
}
