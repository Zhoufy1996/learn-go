### 1. struct to base64 string
```go
h, err := json.Marshal(header)
s := base64.StdEncoding.EncodeToString(h)
```
### 2. time
```go
now := time.Now().Unix()
now.AddDate(0, 0, 1).Unix()
```