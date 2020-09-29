package middleware

import (
	"strconv"
	"time"
)

// Tokeninfo is
type Tokeninfo struct {
	UserID      int
	FailureTime time.Time
}

// TokenContainer is
var tokenContainer = make(map[string]*Tokeninfo)

// IsValidToken is
func IsValidToken(cookie string) bool {
	Tokeninfo, ok := tokenContainer[cookie]
	if ok {
		if time.Now().Before(Tokeninfo.FailureTime) {
			return true
		}
	}
	return false
}

// SetToken is
func SetToken(userID int) string {
	var token = "bear " + strconv.Itoa((userID+4)*89+8) + "end"
	tokenContainer[token] = &Tokeninfo{
		UserID:      userID,
		FailureTime: time.Now().AddDate(0, 0, 1),
	}
	return token
}

// GetAllToken is
func GetAllToken() map[string]*Tokeninfo {
	return tokenContainer
}
