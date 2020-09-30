package v1

import (
	"backend/core/e"
	"backend/core/response"
	"backend/dto"
	"backend/middleware"
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
	token := middleware.SetToken(int(u.ID))
	data := &loginRes{
		Token: token,
	}
	response.SuccessResult(c, data)
}

// GetAllToken is
func GetAllToken(c *gin.Context) {
	response.SuccessResult(c, middleware.GetAllToken())
}

// VerityToken is
func VerifyToken(c *gin.Context) {
	response.SuccessResult(c, nil)
}
