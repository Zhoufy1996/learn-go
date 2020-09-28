package routers

import (
	v1 "backend/api/v1"

	"github.com/gin-gonic/gin"
)

func initCategoryRouter(router *gin.RouterGroup) {
	apiRouter := router.Group("/category")

	{
		apiRouter.GET("/all", v1.GetAllCategories)
		apiRouter.GET("/count", v1.GetCategoriesCount)
		apiRouter.GET("/id/:id", v1.GetCategory)
		apiRouter.POST("/add", v1.CreateCategory)          // 创建标签
		apiRouter.PUT("/update", v1.UpdateCategory)        // 更新标签
		apiRouter.DELETE("/delete/:id", v1.DeleteCategory) // 删除标签
	}
}
