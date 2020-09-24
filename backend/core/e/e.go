package e

// CustomError is
type CustomError struct {
	Code uint   `json:"code"`
	Msg  string `json:"msg"`
}

// SEARCHERROR is
const (
	SEARCHERROR = "查询出错"
	PARAMERROR  = "传参错误"
	NOTEXIST    = "资源不存在"
)
