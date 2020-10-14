package middleware

import (
	"backend/core/e"
	"backend/core/response"
	"fmt"
	"strings"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

// SECRECT is
var SECRECT = []byte("MMEE")

// // JWTPayload is
// type JWTPayload struct {
// 	Iss string `json:"iss"` // 签发者
// 	Sub int    `json:"sub"` // 面向的用户
// 	Exp int64  `json:"exp"` // 过期时间
// 	Iat int64  `json:"iat"` // 签发时间
// }

// BuildToken is
func BuildToken(userID int) (string, error) {
	now := time.Now()
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"userID": userID,
		"iat":    now.Unix(),
		"exp":    now.AddDate(0, 0, 1).Unix(),
	})
	tokenString, err := token.SignedString(SECRECT)
	return tokenString, err
}

// ParseToken is
func ParseToken(tokenString string) error {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}

		return SECRECT, nil
	})

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		fmt.Println(claims["iat"], claims["exp"])
		return nil
	}
	fmt.Println(err)
	return err
}

// IsValidToken is
func IsValidToken(token string) bool {
	err := ParseToken(token)
	return err == nil
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
		if isGuardMethod(method) {
			arr := strings.Split(authorization, " ")
			if arr[0] != "Bearer" || !IsValidToken(arr[1]) {
				response.FailureResult(c, e.ForbiddenError)
				c.Abort()
				return
			}
		}

		c.Next()
		return
	}
}
