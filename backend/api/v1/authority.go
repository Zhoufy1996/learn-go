package v1

import (
	"backend/core/e"
	"backend/core/response"
	"backend/dto"
	"backend/middleware"
	"backend/services"

	"github.com/gin-gonic/gin"
)

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
	middleware.SetCookie(int(u.ID), c)
	response.SuccessResult(c, nil)
}

// GetAllCookies is
func GetAllCookies(c *gin.Context) {
	response.SuccessResult(c, middleware.GetAllCookies())
}
