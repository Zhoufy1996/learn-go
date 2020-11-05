package v1

import (
	"backend/core/e"
	"backend/core/response"
	"backend/models"

	"github.com/gin-gonic/gin"
)

// GetAllSortNos is
func GetAllSortNos(c *gin.Context) {
	sortNos, err := models.GetAllSortNos()
	if err != nil {
		response.FailureResult(c, e.ParamError)
		return
	}
	response.SuccessResult(c, sortNos)
}

// RunSortNoScript is
func RunSortNoScript(c *gin.Context) {
	err := models.SortNoScript()
	if err != nil {
		response.FailureResult(c, e.ParamError)
		return
	}
	response.SuccessResult(c, nil)
}
