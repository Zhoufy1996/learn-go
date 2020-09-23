package models

// Article is
type Article struct {
	Model
	Title       string
	SubTitle    string
	CreateUser  User `gorm:"foreignKey:ID"`
	Description string
	Body        string
	Category    Category `gorm:"foreignKey:ID"`
	Tags        []Tag    `gorm:"many2many:ID"`
}
