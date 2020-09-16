package main

import (
	"log"
	"time"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.New()

	router.Use(logger())

	router.GET("/test", func(c *gin.Context) {
		example := c.MustGet("example").(string)

		log.Println(example)
	})

	router.Run(":8080")
}

func logger() gin.HandlerFunc {
	return func(c *gin.Context) {
		t := time.Now()

		c.Set("example", "123456")

		c.Next()

		latency := time.Since(t)
		log.Print(latency)

		status := c.Writer.Status()

		log.Println(status)
	}
}
