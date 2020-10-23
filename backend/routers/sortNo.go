package routers

import (
	v1 "backend/api/v1"

	"github.com/gin-gonic/gin"
)

func initSortNoRouter(router *gin.RouterGroup) {
	apiRouter := router.Group("/sortno")

	{
		apiRouter.GET("/all", v1.GetAllSortNos)
		apiRouter.GET("/tablename/:tablename", v1.GetSortNo)
		apiRouter.PUT("/update", v1.UpdateSortNo) // 更新标签
	}
}
