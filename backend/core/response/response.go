package response

import (
	"backend/core/e"
	"net/http"

	"github.com/gin-gonic/gin"
)

// SUCCESS FAILURE
const (
	SUCCESS = 0
)

// Response is
type Response struct {
	Code int         `json:"code"`
	Msg  string      `json:"msg"`
	Data interface{} `json:"data"`
}

// Result is
func Result(httpCode int, response *Response, c *gin.Context) {
	c.JSON(httpCode, response)
}

// SuccessResult is
func SuccessResult(c *gin.Context, data interface{}) {
	res := &Response{
		Code: SUCCESS,
		Msg:  "操作成功",
		Data: data,
	}
	Result(http.StatusOK, res, c)
}

// FailureResult is
func FailureResult(c *gin.Context, customError *e.CustomError) {
	var (
		code     int    = customError.Code
		msg      string = customError.Msg
		httpCode int    = customError.HTTPCode
	)
	Result(httpCode, &Response{
		Code: code,
		Msg:  msg,
		Data: nil,
	}, c)
}
