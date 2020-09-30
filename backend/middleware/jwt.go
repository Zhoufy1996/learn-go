package middleware

import (
	"backend/core/e"
	"backend/core/response"

	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

// Tokeninfo is
type Tokeninfo struct {
	UserID      int
	FailureTime time.Time
}

// TokenContainer is
var tokenContainer = make(map[string]*Tokeninfo)

// IsValidToken is
func IsValidToken(token string) bool {
	Tokeninfo, ok := tokenContainer[token]
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

func isGuardMethod(str string) bool {
	return str == "POST" || str == "PUT" || str == "DELETE"
}

// JWT is
func JWT() gin.HandlerFunc {
	return func(c *gin.Context) {
		method := c.Request.Method
		authorization := c.Request.Header.Get("Authorization")
		if c.Request.URL.Path == "/v1/authority/login" {
			c.Next()
			return
		}

		if isGuardMethod(method) && !IsValidToken(authorization) {
			response.FailureResult(c, e.ForbiddenError)
			c.Abort()
			return
		}
		c.Next()
		return
	}
}
