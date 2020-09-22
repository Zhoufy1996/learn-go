### 1. 入门指南
#### 1.1. 概述
##### 1.1.1. 安装
```
go get -u gorm.io/gorm
go get -u gorm.io/driver/sqlite
```
##### 1.1.2. 快速入门
1. 连接数据库
2. 迁移schema

#### 1.2. 声明模型
##### 1.2.1. 模型定义
```
type User struct {
    ID uint `json:"id"`
}
```

##### 1.2.2. 约定
1. 表名: 蛇形复数 `users`
2. 列名: `user_id`
3. gorm.Model(可自定义，配合callback)
##### 1.2.3. 高级选项
1. 权限控制
2. 创建/更新时间追踪
3. 嵌入结构体 `gorm:"embedded;embeddedPrefix:author_`
#### 1.3. 连接到数据库
1. fmt.Sprintf
2. strconv.Itoa
3. parseTime
4. charset
```go
func main() {
  // 参考 https://github.com/go-sql-driver/mysql#dsn-data-source-name 获取详情
  dsn := "user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
  db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
}
```
### 2. CRUD接口
#### 2.1. 创建
1. 创建
```go
user := &User{Name: "123"}
db.Create(user)
```
2. 创建钩子
```go
BeforeCreate
```
3. 批量插入
```go
users := []User{{Name: "123"}, {Name: "456"}}
```
4. Create Form Map
```go
DB.Model(&User{}).Create(map[string]interface{}{
  {"Name": "jinzhu", "Age": 18},
  {"Name": "jinzhu_2", "Age": 20},
})
```
5. SQL表达式，Context Valuer
6. 关联创建
```go
db.Create(&User{
  Name: "jinzhu",
  CreditCard: CreditCard{Number: "411111111111"}
})

// 跳过关联保存
db.Omit("CreditCard").Create(&user)
```
7. 默认值`gorm:"default:18"`

#### 2.2. 查询
##### 2.2.1. 检索单个对象
```go
db.First(&user)
db.Take(&user)
db.Last(&user)
```

##### 2.2.2. 根据主键检索
```
db.First(&user, 10)
db.Find(&user, []int{1,2,3})
```

##### 2.2.3. 检索对象
```
result := db.Find(&users)
result.RowsAffected
result.Error
```
##### 2.2.4. 条件
1. String条件
```go
db.Where("name = ?", "jinzhu").First(&user)
```
2. Struct & Map条件
```go
// Struct
do.Where(&User{Name: "123"}).First(&user)
// Map
do.Where(map[string]interface{}{Name: "123"}).First(&user)
// 主键切片条件
db.where([]int64{20, 21, 22}).Find(&user)
```
##### 2.2.5. 内联条件
##### 2.2.6. Not条件
##### 2.2.7. Or条件
##### 2.2.8. 选择特定字段
##### 2.2.9. Other
1. Order
2. Limit & Offset
3. Group & Having
4. Distinct
5. Joins
6. Joins预加载
7. Scan
#### 2.3. 高级查询
1. 只能选择字段
2. Locking
3. 子查询
4. From子查询
5. Group条件
6. 命名参数
7. Find至map
8. FirstOrInit
9. FirstOrCreate
10. 优化器、索引提示
11. 迭代
12. FindInBatches
13. 查询钩子
14. Pluck
15. Scopes
16. Count
#### 2.4. 更新

#### 2.5. 删除
#### 2.6. 原生SQL和SQL生成器
### 3. 接口

### 4. 教程

### 5. 高级主题