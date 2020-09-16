package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
)

func getting(c *gin.Context) {}

func main() {
	// log file
	gin.DisableConsoleColor()

	// output color
	gin.ForceConsoleColor()

	f, _ := os.Create("gin.log")
	gin.DefaultWriter = io.MultiWriter(f)

	// middleware
	router := gin.New()

	// custom log format

	router.Use(gin.LoggerWithFormatter(func(param gin.LogFormatterParams) string {

		// your custom format
		return fmt.Sprintf("%s - [%s] \"%s %s %s %d %s \"%s\" %s\"\n",
			param.ClientIP,
			param.TimeStamp.Format(time.RFC1123),
			param.Method,
			param.Path,
			param.Request.Proto,
			param.StatusCode,
			param.Latency,
			param.Request.UserAgent(),
			param.ErrorMessage,
		)
	}))

	// log
	router.Use(gin.Logger())
	// recovery
	router.Use(gin.Recovery())

	// custom recovery
	// router.Use(gin.CustomRecovery(func(c *gin.Context, recovered interface{}) {
	// 	if err, ok = recovered.(string); ok {
	// 		c.String(http.StatusInternalServerError, fmt.Sprintf("error: %s", err))

	// 	}
	// 	c.AbortWithStatus(http.StatusInternalServerError)
	// }))

	// 自定义中间件
	// router.GET("/benchmark", MyBenchLogger(), benchEndpoint)
	authorized := router.Group("/")

	authorized.Use(gin.BasicAuth(gin.Accounts{
		"foo":  "bar",
		"manu": "123",
	}))
	{
		authorized.POST("login", func(c *gin.Context) {})
	}

	// quick start
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	// methods
	router.GET("/someGet", getting)
	router.POST("/someGet", getting)
	router.PUT("/someGet", getting)
	router.DELETE("/someGet", getting)
	router.PATCH("/someGet", getting)
	router.HEAD("/someGet", getting)
	router.OPTIONS("someOptions", getting)

	// params
	router.GET("/user/:name", func(c *gin.Context) {
		name := c.Param("name")
		c.String(http.StatusOK, "Hello %s", name)
	})

	// /user/john/send => john is /send, how to delete "/" of "/send"
	router.GET("/user/:name/*action", func(c *gin.Context) {
		name := c.Param("name")
		action := c.Param("action") // action = "/send"
		message := name + " is " + action
		c.String(http.StatusOK, message)
	})

	// querystring
	router.GET("/welcome", func(c *gin.Context) {
		firstname := c.DefaultQuery("firstname", "Guest")
		lastname := c.Query("lastname")

		c.String(http.StatusOK, "Hello %s %s", firstname, lastname)
	})

	// form
	router.POST("/form_post", func(c *gin.Context) {
		message := c.PostForm("message")
		nick := c.DefaultPostForm("nick", "anonymous")
		c.JSON(200, gin.H{
			"status":  "posted",
			"message": message,
			"nick":    nick,
		})
	})

	// querymap ids[a]=123&ids[b]=456
	router.GET("/querymap", func(c *gin.Context) {
		ids := c.QueryMap("ids")
		c.JSON(200, gin.H{
			"message": ids,
		})
	})

	// upload files
	router.MaxMultipartMemory = 8 << 20 // 8MiB
	router.POST("/upload", func(c *gin.Context) {
		file, _ := c.FormFile("file")

		c.SaveUploadedFile(file, "./")
		c.String(http.StatusOK, fmt.Sprintf("'%s' uploaded!", file.Filename))
	})

	// multiple files
	router.POST("/mulUpload", func(c *gin.Context) {
		form, _ := c.MultipartForm()

		files := form.File["upload[]"]

		for _, file := range files {
			c.SaveUploadedFile(file, "./")
		}

		c.String(http.StatusOK, fmt.Sprintf("%d files uploaded!", len(files)))
	})
	router.Run(":8080")
}
