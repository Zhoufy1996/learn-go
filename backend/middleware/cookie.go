package middleware

import (
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

// CookieInfo is
type CookieInfo struct {
	UserID      int
	FailureTime time.Time
}

var cookieContainer = make(map[string]*CookieInfo)

// IsValidCookie is
func IsValidCookie(cookie string) bool {
	cookieInfo, ok := cookieContainer[cookie]
	if ok {
		if time.Now().Before(cookieInfo.FailureTime) {
			return true
		}
	}
	return false
}

// SetCookie is
func SetCookie(userID int, c *gin.Context) error {
	var cookie = "bear " + strconv.Itoa((userID+4)*89+8) + "end"
	var validDuration = 60 * 60 * 24
	c.SetCookie("user_cookie", cookie, validDuration, "/", "localhost", false, true)
	cookieContainer[cookie] = &CookieInfo{
		UserID:      userID,
		FailureTime: time.Now().Add(time.Duration(validDuration)),
	}
	return nil
}

// GetAllCookies is
func GetAllCookies() map[string]*CookieInfo {
	return cookieContainer
}
