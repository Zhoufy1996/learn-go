package models

import (
	"backend/pkg/setting"
	"fmt"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// Model is
type Model struct {
	ID        uint `gorm:"primaryKey,autoIncrement" `
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt
}

var db *gorm.DB

var validDB = [1]string{"mysql"}

// SetUp is
func SetUp() {
	isValidDB := false
	for _, dbType := range validDB {
		if dbType == setting.DatabaseSetting.Type {
			isValidDB = true
			break
		}
	}

	if !isValidDB {
		fmt.Println("这不是一个有效的数据库类型")
		return
	}

	var err error

	// 链接数据库
	if setting.DatabaseSetting.Type == "mysql" {
		var dsn = fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8&parseTime=True&loc=Local",
			setting.DatabaseSetting.User,
			setting.DatabaseSetting.Password,
			setting.DatabaseSetting.Host,
			setting.DatabaseSetting.Name)

		db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})

		if err != nil {
			fmt.Println("数据库连接失败")
			return
		}

		// callback
	}

	// 模型迁移
	fmt.Println("开始迁移schema")
	AutoMigrateUserModel()
	AutoMigrateBlogModel()
	fmt.Println("schema迁移完毕")

	// 创建初始库
	fmt.Println(setting.ScriptSetting)
	if setting.ScriptSetting.ShouldRunDbScript == "true" {
		fmt.Println("开始创建初始库")
		runScript()
		setting.UpdateCfg("Script", "ShouldRunDbScript", "false")
		fmt.Println("初始库创建成功")
	}
}
