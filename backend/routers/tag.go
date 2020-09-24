package routers

import (
	v1 "backend/api/v1"

	"github.com/gin-gonic/gin"
)

func initTagRouter(router *gin.RouterGroup) {
	apiRouter := router.Group("/tag")

	{
		apiRouter.GET("/all", v1.GetAllTags)
		apiRouter.GET("/count", v1.GetTagsCount)
		apiRouter.GET("/id/:id", v1.GetTag)
	}
}
