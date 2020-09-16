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

### 4. form(body ?)

### 5. files

### 6. router group

### 7. middleware
1. log: color/file/format
2. recovery
3. auth
4. custom

### 8. model binding and validation
1. json
2. custom binding
3. querystring
4. uri
5. header

### 9. redirects
1. c.Redirect(http.StatusFound, "/foo)

### 10. custom middleware
1. Goroutines inside a middleware c.Copy
2. cookie c.Cookie