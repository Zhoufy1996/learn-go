package v1

import (
	"backend/core/e"
	"backend/core/response"
	"backend/dto"
	"backend/models"
	"backend/services"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetTag api
// @tags tag
// @summary 根据id获取标签
// @accept json
// @produce  json
// @param id path int true "id"
// @success 200 {object} models.Tag string "{"code":0,"msg":"操作成功", "data":{}}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /tag/id/{id} [get]
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
// @tags tag
// @summary 获取所有的标签
// @accept json
// @produce  json
// @success 200 {object} []models.Category "{"success":true,"data":{},"msg":"上传成功"}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /tag/all [get]
func GetAllTags(c *gin.Context) {
	tags, err := services.GetAllTags()
	if err != nil {
		response.FailureResult(c, e.SearchError)
		return
	}
	response.SuccessResult(c, tags)
}

// GetTagsCount api
// @tags tag
// @summary 获取标签总数
// @accept json
// @produce  json
// @success 200 {string} string "{"success":true,"data":{},"msg":"上传成功"}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /tag/count [get]
func GetTagsCount(c *gin.Context) {
	count, err := services.GetTagsCount()
	if err != nil {
		response.FailureResult(c, e.SearchError)
		return
	}
	response.SuccessResult(c, count)
}

// CreateTag api
// @tags tag
// @summary 创建标签
// @accept json
// @produce  json
// @param row body dto.CreateTagDTO false "row"
// @success 200 {string} string "{"success":true,"data":{},"msg":"上传成功"}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /tag/add [post]
func CreateTag(c *gin.Context) {
	var (
		newTag dto.CreateTagDTO
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

// UpdateTag api
// @tags tag
// @summary 编辑标签
// @accept json
// @produce  json
// @param row body dto.UpdateTagDTO false "row"
// @success 200 {string} string "{"success":true,"data":{},"msg":"上传成功"}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /tag/update [put]
func UpdateTag(c *gin.Context) {
	var (
		updateTag dto.UpdateTagDTO
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

// DeleteTag api
// @tags tag
// @summary 根据id删除标签
// @accept json
// @produce  json
// @param id path int true "id"
// @success 200 {object} models.Tag string "{"code":0,"msg":"操作成功", "data":{}}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /tag/delete/{id} [delete]
func DeleteTag(c *gin.Context) {
	var (
		id  uint64
		err error
	)

	id, err = strconv.ParseUint(c.Param("id"), 10, 64)
	if err != nil {
		response.FailureResult(c, e.ParamError)
		return
	}
	err = services.DeleteTag(uint(id))
	if err != nil {
		response.FailureResult(c, e.SearchError)
		return
	}
	response.SuccessResult(c, nil)
}
