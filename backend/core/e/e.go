package e

import (
	"net/http"
)

// CustomError is
type CustomError struct {
	Code     int    `json:"code"`
	HttpCode int    `json:"httpCode"`
	Msg      string `json:"msg"`
}

// SearchError is
var SearchError = &CustomError{
	Code:     1001,
	HttpCode: http.StatusInternalServerError,
	Msg:      "查询出错",
}

// CreateError is
var CreateError = &CustomError{
	Code:     1002,
	HttpCode: http.StatusInternalServerError,
	Msg:      "创建出错",
}

// ParamError is
var ParamError = &CustomError{
	Code:     2001,
	HttpCode: http.StatusBadRequest,
	Msg:      "传参错误",
}
