package routers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"

	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"

	"backend/config"
	_ "backend/docs" // docs is generated by Swag CLI, you have to import it.
)

// SetUp is
func SetUp(r *gin.Engine) {

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status": "ok",
		})
	})

	apiBaseGroup := r.Group("/v1")

	initTagRouter(apiBaseGroup)
	initCategoryRouter(apiBaseGroup)
	initArticleRouter(apiBaseGroup)
	initAuthorityRouter(apiBaseGroup)
	initDevRouter(apiBaseGroup)

	url := ginSwagger.URL(fmt.Sprintf("http://127.0.0.1:%s/swagger/doc.json", config.AppSetting.Port)) // The url pointing to API definition

	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler, url))
}
