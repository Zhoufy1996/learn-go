package routers

import (
	v1 "backend/api/v1"

	"github.com/gin-gonic/gin"
)

func initTagRouter(router *gin.RouterGroup) {
	apiRouter := router.Group("/tag")

	{
		apiRouter.GET("/all", v1.GetAllTags) // 获取标签列表
		apiRouter.GET("/count", v1.GetTagsCount)
		apiRouter.GET("/id/:id", v1.GetTag)           // 获取标签
		apiRouter.POST("/add", v1.CreateTag)          // 创建标签
		apiRouter.PUT("/update", v1.UpdateTag)        // 更新标签
		apiRouter.DELETE("/delete/:id", v1.DeleteTag) // 删除标签
	}
}
