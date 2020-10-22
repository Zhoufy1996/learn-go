package v1

import (
	"backend/core/e"
	"backend/core/response"
	"backend/dto"
	"backend/middleware"
	"backend/models"
	"backend/services"

	"github.com/gin-gonic/gin"
)

type loginRes struct {
	Token string `json:"token"`
}

// Login is
func Login(c *gin.Context) {
	var user *dto.LoginDto = &dto.LoginDto{}

	err := c.ShouldBindJSON(user)

	if err != nil {
		response.FailureResult(c, e.ParamError)
		return
	}

	u, err := services.UserIsExist(user)
	if err != nil {
		response.FailureResult(c, e.SearchError)
		return
	}
	token, err := middleware.BuildToken(int(u.ID))

	data := &loginRes{
		Token: token,
	}
	response.SuccessResult(c, data)
}

// VerifyToken is
func VerifyToken(c *gin.Context) {
	response.SuccessResult(c, nil)
}

// GetAllSortNos is
func GetAllSortNos(c *gin.Context) {
	sortNos, err := models.GetAllSortNos()
	if err != nil {
		response.FailureResult(c, e.ParamError)
		return
	}
	response.SuccessResult(c, sortNos)
}
