package response

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// SUCCESS FAILURE
const (
	SUCCESS = 0
	FAILURE = 1
)

// Response is
type Response struct {
	Code int         `json:"code"`
	Msg  string      `json:"msg"`
	Data interface{} `json:"data"`
}

// Result is
func Result(code int, msg string, data interface{}, c *gin.Context) {
	c.JSON(http.StatusOK, Response{
		code,
		msg,
		data,
	})
}

// OkWithData is
func OkWithData(data interface{}, c *gin.Context) {
	Result(SUCCESS, "操作成功", data, c)
}

// FailWithMsg is
func FailWithMsg(msg string, c *gin.Context) {
	Result(FAILURE, msg, nil, c)
}
