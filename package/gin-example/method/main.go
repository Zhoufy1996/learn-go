package main

import "github.com/gin-gonic/gin"

/*
	GET
	POST
	PUT
	PATCH
	DELETE
	OPTIONS
*/
func main() {
	router := gin.Default()
	router.GET("/someGet", getting)
	router.POST("/someGet", getting)
	router.PUT("/someGet", getting)
	router.DELETE("/someGet", getting)
	router.PATCH("/someGet", getting)
	router.HEAD("/someGet", getting)
	router.OPTIONS("someOptions", getting)

	router.Run()
}

func getting(c *gin.Context) {}
