package models

import "time"

type Model struct {
	ID       int       `gorm:"primary_key" json:"id"`
	CreateAt time.Time `json:"create_at"`
	UpdateAt time.Time `json:"update_at"`
	DeleteAt time.Time `json:"delete_at"`
}
