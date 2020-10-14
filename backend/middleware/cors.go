package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Cors 处理跨域请求,支持options访问
func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		method := c.Request.Method
		origin := c.Request.Header.Get("Origin")
		c.Header("Access-Control-Allow-Origin", origin)                                 // 可访问的域名
		c.Header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization") // 有效的请求头
		c.Header("Access-Control-Allow-Methods", "POST, OPTIONS, DELETE, PUT, GET")     // 请求方法
		c.Header("Access-Control-Expose-Headers", "Authorization")                      // 暴露给外部的请求头，客户端可以获取的请求头
		c.Header("Access-Control-Max-Age", "60")                                        // 有效时间

		// 放行所有OPTIONS方法
		if method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
		}
		// 处理请求
		c.Next()
	}
}
