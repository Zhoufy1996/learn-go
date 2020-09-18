package main

import (
	"backend/pkg/setting"
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
)

func init() {
	setting.SetUp()
}

func main() {
	fmt.Print("start \n")
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run(":" + strconv.Itoa(setting.AppSetting.Port)) // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}

// package main

// import "fmt"

// func main() {
// 	fmt.Print("hi")
// }
