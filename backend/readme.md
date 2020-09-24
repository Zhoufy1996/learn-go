### 1. 依赖(包)管理
go mod
```
go mod tidy
go get -u
```
### 2. 命令行工具
makefile

### 3. 包
1. gin
2. ini 读取配置
####
lint
format

#### 101
1. config
2. middleware
3. models
4. gorm


### 步骤
1. 启动服务器 (ok) gin
2. 连接数据库 gorm
3. 建表
4. 建模型
5. 校验
6. 中间件 jwt log gredis
7. router

### how to test gorm model

### 分层
#### 1. models
1. 定义model
2. sql
#### 2. services
1. 调用model.sql
2. 组装数据
#### 3. api.v1
1. 校验参数
2. 调用services
3. 处理异常or返回数据

#### 4. routers