package models

import (
	"time"

	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Code  string
	Price uint
}

// Model is
type Model struct {
	ID       int       `gorm:"primary_key" json:"id"`
	CreateAt time.Time `json:"create_at"`
	UpdateAt time.Time `json:"update_at"`
	DeleteAt time.Time `json:"delete_at"`
}

// SetUp is
func SetUp() {
	// 链接数据库
	// 模型对应
	// log
	// 创建初始库
}
