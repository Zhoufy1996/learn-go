### 1. go mod init 报错

`go mod init ${module_name}` 需要加module_name

### 2. go get 失败

1. 翻墙 `vpn` or `自建`
2. 还原 `go env -w GOPROXY=https://goproxy.cn`

### 3. WSL 环境变量问题

每次用vscode的WSL打开项目，都需要重新设置环境变量

``` cmd
export GOPATH=$HOME/go
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
```

### 4. 如何读取本地模块

``` go
import "backend/models
```

### 5. exec: "gcc": executable file not found in %PATH%

1. 安装gcc
2. vscode 安装 c插件

### 6. 浏览器设置cookie失败

暂时没有找到原因

### 7. Option请求 Authorization请求头报错

跨域设置: Access-Control-Allow-Headers

### 8. 零值不会更新

0, nil, "", false

### 101 包应用

#### 热重载 fresh

#### 文档

https://swaggo.github.io/swaggo.io/declarative_comments_format/general_api_info.html

https://github.com/swaggo/swag/blob/master/README_zh-CN.md

#### 如何校验参数到绑定对象

https://blog.csdn.net/qq_36431213/article/details/82967982

#### JWT/cookie-session

``` 

jwt

{
    header
    payload
    secret
}

h = base64(header)
p = base64{payload}
s = HMACSHA256(h, p, secret)

"Bear " + h + "." + p + "." + s

req => server Authorization
重新签名，比较是否一致

问题：刷新时机
```

``` 

cookie sesstion

cookie 保存在 redis

查询时刷新时间
```

#### 拖动排序

1. sortNo设置为浮点型，定时更新
2. sortNo与模型分离
