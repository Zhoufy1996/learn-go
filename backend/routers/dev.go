package routers

import (
	v1 "backend/api/v1"

	"github.com/gin-gonic/gin"
)

func initDevRouter(router *gin.RouterGroup) {
	apiRouter := router.Group("/dev")

	{
		apiRouter.GET("/runSortNoScript", v1.RunSortNoScript)
	}
}
