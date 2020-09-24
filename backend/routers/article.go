package routers

import (
	v1 "backend/api/v1"

	"github.com/gin-gonic/gin"
)

func initArticleRouter(router *gin.RouterGroup) {
	apiRouter := router.Group("/article")

	{
		apiRouter.GET("/id/:id", v1.GetArticle)
	}
}
