package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func getting(c *gin.Context) {}

func main() {
	router := gin.Default()
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
