package v1

import (
	"backend/core/e"
	"backend/core/response"
	"backend/services"
	"strconv"

	"github.com/gin-gonic/gin"
)

func GetTag(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 64)

	tag, err := services.GetTag(uint(id))
	if err != nil {
		response.FailWithMsg(e.SEARCHERROR, c)
		return
	}
	response.OkWithData(tag, c)
}

// GetAllTags api
// @Tags GetAllTags
// @Summary 获取所有的Tag
// @accept multipart/form-data
// @Produce  application/json
// @Success 200 {string} string "{"success":true,"data":{},"msg":"上传成功"}"
// @Failure 400 {string} string "{"error"}"
// @Router /tag/all [GET]
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
