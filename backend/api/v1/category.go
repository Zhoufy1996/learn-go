package v1

import (
	"backend/core/e"
	"backend/core/response"
	"backend/services"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetCategory is
func GetCategory(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 64)

	category, err := services.GetCategory(uint(id))

	if err != nil {
		response.FailWithMsg(e.SEARCHERROR, c)
		return
	}
	response.OkWithData(category, c)
}

// GetAllCategories is
func GetAllCategories(c *gin.Context) {
	categories, err := services.GetAllCategories()
	if err != nil {
		response.FailWithMsg(e.SEARCHERROR, c)
		return
	}
	response.OkWithData(categories, c)
}

// GetCategoriesCount is
func GetCategoriesCount(c *gin.Context) {
	count, err := services.GetCategoriesCount()
	if err != nil {
		response.FailWithMsg(e.SEARCHERROR, c)
		return
	}
	response.OkWithData(count, c)
}
