package routers

import (
	v1 "backend/api/v1"

	"github.com/gin-gonic/gin"
)

func initAuthorityRouter(router *gin.RouterGroup) {
	apiRouter := router.Group("/authority")

	{
		apiRouter.POST("/login", v1.Login)
		apiRouter.POST("/verifytoken", v1.VerifyToken)
		apiRouter.GET("/sortNos", v1.GetAllSortNos)
	}
}
