package main

import (
	"backend/config"
	"backend/middleware"
	"backend/models"
	"backend/routers"
	"fmt"

	"github.com/gin-gonic/gin"
)

var r = gin.New()

const (
	separator      = "---------------"
	shortSeparator = "----------"
)

func init() {
	fmt.Println(separator, " init system start", separator)

	fmt.Println(shortSeparator, " setting init start", shortSeparator)
	config.SetUp()
	fmt.Println(shortSeparator, " setting init end ", shortSeparator)

	fmt.Println(shortSeparator, " models init start", shortSeparator)
	models.SetUp()
	fmt.Println(shortSeparator, " models init end ", shortSeparator)

	fmt.Println(shortSeparator, " middlewares init start", shortSeparator)
	middleware.SetUp(r)
	fmt.Println(shortSeparator, " middlewares init end ", shortSeparator)

	fmt.Println(shortSeparator, " routers init start", shortSeparator)
	routers.SetUp(r)
	fmt.Println(shortSeparator, " routers init end ", shortSeparator)

	fmt.Println(separator, " init system end ", separator)

}

// @title 个人博客 API
// @version 0.0.1
// @description 个人博客 go学习
// @tag.name tag
// @tag.description tag description
// @tag.docs.url doc url
// @tag.docs.description doc description
// @contact.email hellozfy1996@gmail.com
// @host 127.0.0.1:8050
// @BasePath /v1
func main() {

	r.Run(fmt.Sprintf(":%s", config.AppSetting.Port))
}
