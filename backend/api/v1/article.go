package v1

import (
	"backend/core/e"
	"backend/core/response"
	"backend/services"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetArticle is
func GetArticle(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 64)

	article, err := services.GetArticle(uint(id))
	if err != nil {
		response.FailWithMsg(e.SEARCHERROR, c)
		return
	}
	response.OkWithData(article, c)
}
