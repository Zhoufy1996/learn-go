### 1. go mod init fails to determine module path in subdirectory
1. go mod init 报错

2. go mod init web 需要加module_name


### 2. 换源
go env -w GOPROXY=https://goproxy.cn

### 3. vscode go环境变量与全局不一致
重启计算机┓( ´∀` )┏

### 4. 读取本地模块
```go
import "backend/models"
```

### 5.lint报错
exported function SetUp should have comment or be unexported

需要给导出的函数/结构体添加注释

### 6. exec: "gcc": executable file not found in %PATH%
1. 安装gcc
2. vscode 安装 c插件

### 7. running gcc failed: exit status 1


### 8. 安装Microsoft-Windows-Subsystem-Linux
放弃windows
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux

root sudo su

### 9. 外键不会在表里生成

### 10. 文档
https://swaggo.github.io/swaggo.io/declarative_comments_format/general_api_info.html

https://github.com/swaggo/swag/blob/master/README_zh-CN.md


### 11. 如何校验参数到绑定对象


https://blog.csdn.net/qq_36431213/article/details/82967982

### 12. 零值不会更新
0, nil, "", false