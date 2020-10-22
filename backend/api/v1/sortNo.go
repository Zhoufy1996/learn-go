package v1

import (
	"backend/core/e"
	"backend/core/response"
	"backend/services"

	"github.com/gin-gonic/gin"
)

// GetSortNo is
func GetSortNo(c *gin.Context) {
	tableName := c.Param("tablename")

	sortNo, err := services.GetSortNoByTableName(tableName)
	if err != nil {
		response.FailureResult(c, e.SearchError)
		return
	}
	response.SuccessResult(c, sortNo)
}
