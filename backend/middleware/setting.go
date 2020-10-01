package middleware

import (
	"github.com/gin-gonic/gin"
)

// SetUp is
func SetUp(r *gin.Engine) {
	// c.Use()

	r.Use(gin.Logger())

	// Recovery middleware recovers from any panics and writes a 500 if there was one.
	r.Use(gin.Recovery())

	r.Use(Cors())

	r.Use(JWT())
}
