package v1

import (
	"backend/core/e"
	"backend/core/response"
	"backend/dto"
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

// UpdateSortNo is
func UpdateSortNo(c *gin.Context) {
	var (
		updateSortNo dto.UpdateSortNoDTO
		err          error
	)
	err = c.ShouldBindJSON(&updateSortNo)
	if err != nil {
		response.FailureResult(c, e.ParamError)
		return
	}
	err = services.UpdateSortNo(updateSortNo.TableName, updateSortNo.IDs)

	if err != nil {
		response.FailureResult(c, e.CreateError)
		return
	}

	response.SuccessResult(c, nil)
}
