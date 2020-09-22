package main

import (
	"backend/middleware"
	"backend/models"
	"backend/pkg/setting"
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
	setting.SetUp()
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

func main() {
	r.Run(fmt.Sprintf(":%s", setting.AppSetting.Port))
}
