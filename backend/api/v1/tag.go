package v1

import (
	"backend/core/e"
	"backend/core/response"
	"backend/models"
	"backend/services"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetTag api
// @tags Tags
// @summary 根据id获取标签
// @accept multipart/form-data
// @produce  application/json
// @param id path int true "TAG ID"
// @success 200 {object} models.Tag string "{"code":0,"msg":"操作成功", "data":{}}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /tag/id/{id} [GET]
func GetTag(c *gin.Context) {
	var (
		tag *models.Tag
		err error
		id  uint64
	)

	id, err = strconv.ParseUint(c.Param("id"), 10, 64)
	if err != nil {
		response.FailureResult(c, e.ParamError)
		return
	}
	tag, err = services.GetTag(uint(id))
	if err != nil {
		response.FailureResult(c, e.SearchError)
		return
	}
	response.SuccessResult(c, tag)
}

// GetAllTags api
// @tags Tags
// @summary 获取所有的标签
// @accept multipart/form-data
// @produce  application/json
// @success 200 {string} string "{"success":true,"data":{},"msg":"上传成功"}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /tag/all [GET]
func GetAllTags(c *gin.Context) {
	tags, err := services.GetAllTags()
	if err != nil {
		response.FailureResult(c, e.SearchError)
		return
	}
	response.SuccessResult(c, tags)
}

// GetTagsCount is
// @Tags Tags
// @summary 获取标签总数
// @accept multipart/form-data
// @produce  application/json
// @success 200 {string} string "{"success":true,"data":{},"msg":"上传成功"}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /tag/count [GET]
func GetTagsCount(c *gin.Context) {
	count, err := services.GetTagsCount()
	if err != nil {
		response.FailureResult(c, e.SearchError)
		return
	}
	response.SuccessResult(c, count)
}

// CreateTag is
func CreateTag(c *gin.Context) {
	var (
		newTag services.TagModel
		err    error
	)
	err = c.ShouldBindJSON(&newTag)
	if err != nil {
		response.FailureResult(c, e.ParamError)
		return
	}
	err = services.CreateTag(&newTag)
	if err != nil {
		response.FailureResult(c, e.CreateError)
		return
	}

	response.SuccessResult(c, nil)
}

// UpdateTag is
func UpdateTag(c *gin.Context) {
	var (
		updateTag services.UpdateTagModel
		err       error
	)
	err = c.ShouldBindJSON(&updateTag)
	if err != nil {
		response.FailureResult(c, e.ParamError)
		return
	}
	err = services.UpdateTag(&updateTag)
	if err != nil {
		response.FailureResult(c, e.CreateError)
		return
	}

	response.SuccessResult(c, nil)
}
