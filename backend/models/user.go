package models

type User struct {
	Model
	Username string `json:"username" gorm:"unique"`
	Password string `json:"password"`
}
