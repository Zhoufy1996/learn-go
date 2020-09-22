package main

import (
	"fmt"
	"strconv"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

const (
	dbURL    = "sh-cynosdbmysql-grp-jfan1o5u.sql.tencentcdb.com"
	port     = 21852
	dbName   = "GoLearn"
	username = "root"
	password = "zfy1996514"
)

// User is
type User struct {
	gorm.Model
	ID       uint   `gorm:"primaryKey,autoIncrement" json:"id"`
	Name     string `json:"name"`
	Password string `json:"password"`
	Email    string
	NnMm     string
}

// Article is
type Article struct {
	gorm.Model
	ID    uint
	Title string
}

func main() {
	dsn := username + ":" + password + "@tcp(" + dbURL + ":" + strconv.Itoa(port) + ")/" + dbName
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		fmt.Println("连接失败")
		return
	}
	fmt.Println("连接成功")

	fmt.Println("开始迁移schema")
	db.AutoMigrate(&User{}, &Article{})
	fmt.Println("schema迁移完毕")
}
