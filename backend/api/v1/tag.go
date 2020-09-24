package v1

import (
	"backend/core/e"
	"backend/core/response"
	"backend/services"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetTag is
func GetTag(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 64)

	tag, err := services.GetTag(uint(id))
	if err != nil {
		response.FailWithMsg(e.SEARCHERROR, c)
		return
	}
	response.OkWithData(tag, c)
}

// GetAllTags is
func GetAllTags(c *gin.Context) {
	tags, err := services.GetAllTags()
	if err != nil {
		response.FailWithMsg(e.SEARCHERROR, c)
		return
	}
	response.OkWithData(tags, c)
}

// GetTagsCount is
func GetTagsCount(c *gin.Context) {
	count, err := services.GetTagsCount()
	if err != nil {
		response.FailWithMsg(e.SEARCHERROR, c)
		return
	}
	response.OkWithData(count, c)
}
