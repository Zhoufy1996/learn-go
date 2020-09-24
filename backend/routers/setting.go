package routers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// SetUp is
func SetUp(r *gin.Engine) {
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status": "ok",
		})
	})

	apiBaseGroup := r.Group("")
	initTagRouter(apiBaseGroup)
	initCategoryRouter(apiBaseGroup)
	initArticleRouter(apiBaseGroup)
}
