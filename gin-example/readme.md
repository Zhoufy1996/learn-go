### 1. method
1. get
2. post
3. put
4. delete
5. patch
6. options

### 2. params
1. Param(name)

```go
router.GET("/user/:name", func(c *gin.Context) {
		name := c.Param("name")
		c.String(http.StatusOK, "Hello %s", name)
	})
```

### 3. query

1. DefaultQuery(name)
2. Query(name)

### form