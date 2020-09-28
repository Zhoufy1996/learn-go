package v1

import (
	"backend/core/e"
	"backend/core/response"
	"backend/dto"
	"backend/services"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetCategory api
// @tags category
// @summary 根据id获取类型
// @accept json
// @produce  json
// @param id path int true "id"
// @success 200 {object} models.Category string "{"code":0,"msg":"操作成功", "data":{}}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /category/id/{id} [get]
func GetCategory(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 64)
	if err != nil {
		response.FailureResult(c, e.ParamError)
		return
	}
	category, err := services.GetCategory(uint(id))

	if err != nil {
		response.FailureResult(c, e.SearchError)
		return
	}
	response.SuccessResult(c, category)
}

// GetAllCategories api
// @tags category
// @summary 获取所有的类型
// @accept json
// @produce  json
// @success 200 {object} []models.Category "{"success":true,"data":{},"msg":"上传成功"}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /category/all [get]
func GetAllCategories(c *gin.Context) {
	categories, err := services.GetAllCategories()
	if err != nil {
		response.FailureResult(c, e.SearchError)
		return
	}
	response.SuccessResult(c, categories)
}

// GetCategoriesCount api
// @tags category
// @summary 获取类型总数
// @accept json
// @produce  json
// @success 200 {string} string "{"success":true,"data":{},"msg":"上传成功"}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /category/count [get]
func GetCategoriesCount(c *gin.Context) {
	count, err := services.GetCategoriesCount()
	if err != nil {
		response.FailureResult(c, e.SearchError)
		return
	}
	response.SuccessResult(c, count)
}

// CreateCategory api
// @tags category
// @summary 创建类型
// @accept json
// @produce  json
// @param row body dto.CreateCategoryDTO false "row"
// @success 200 {string} string "{"success":true,"data":{},"msg":"上传成功"}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /category/add [post]
func CreateCategory(c *gin.Context) {
	var (
		newCategory dto.CreateCategoryDTO
		err         error
	)

	err = c.ShouldBindJSON(&newCategory)
	if err != nil {
		response.FailureResult(c, e.ParamError)
		return
	}
	err = services.CreateCategory(&newCategory)
	if err != nil {
		response.FailureResult(c, e.CreateError)
		return
	}

	response.SuccessResult(c, nil)
}

// UpdateCategory api
// @tags category
// @summary 编辑类型
// @accept json
// @produce  json
// @param row body dto.UpdateCategoryDTO false "row"
// @success 200 {string} string "{"success":true,"data":{},"msg":"上传成功"}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /category/update [put]
func UpdateCategory(c *gin.Context) {
	var (
		updateCategory dto.UpdateCategoryDTO
		err            error
	)
	err = c.ShouldBindJSON(&updateCategory)
	if err != nil {
		response.FailureResult(c, e.ParamError)
		return
	}
	err = services.UpdateCategory(&updateCategory)
	if err != nil {
		response.FailureResult(c, e.CreateError)
		return
	}

	response.SuccessResult(c, nil)
}

// DeleteCategory api
// @tags category
// @summary 根据id删除类型
// @accept json
// @produce  json
// @param id path int true "id"
// @success 200 {object} models.Category string "{"code":0,"msg":"操作成功", "data":{}}"
// @failure 500 {string} string "{"code":1001,"msg":"查询出错", "data":null}
// @router /category/delete/{id} [delete]
func DeleteCategory(c *gin.Context) {
	var (
		id  uint64
		err error
	)

	id, err = strconv.ParseUint(c.Param("id"), 10, 64)
	if err != nil {
		response.FailureResult(c, e.ParamError)
		return
	}
	err = services.DeleteCategory(uint(id))
	if err != nil {
		response.FailureResult(c, e.SearchError)
		return
	}
	response.SuccessResult(c, nil)
}
