package models

type Article struct {
	Model
	Title        string `json:"title"`
	SubTitle     string `json:"sub_title"`
	Desc         string `json:"desc"`
	Content      string `json:"content"`
	UpdatedCount int    `json:"update_count"`
	CreatedUser  User
	DeleteUser   User
	State        int `json:"state"`
	Category     Category
	Tags         []Tag
}
