package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

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

	router.Run(":8080")
}
