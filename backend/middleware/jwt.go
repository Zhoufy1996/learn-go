package middleware

import (
	"backend/config"
	"backend/core/e"
	"backend/core/response"
	"fmt"
	"strings"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

const prefix = "Bearer"

var secrect = []byte(config.AppSetting.Secrect)

// BuildToken 创建token
func BuildToken(userID int) (string, error) {
	now := time.Now()
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"userID": userID,
		"iat":    now.Unix(),                  // 过期时间
		"exp":    now.AddDate(0, 0, 1).Unix(), // 签发时间
	})
	tokenString, err := token.SignedString(secrect)
	return prefix + " " + tokenString, err
}

// 解析token
func parseToken(tokenString string) error {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}

		return secrect, nil
	})

	if _, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return nil
	}
	return err
}

func isValidToken(token string) bool {
	err := parseToken(token)
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
			if arr[0] != prefix || !isValidToken(arr[1]) {
				response.FailureResult(c, e.ForbiddenError)
				c.Abort()
				return
			}
		}

		c.Next()
		return
	}
}
