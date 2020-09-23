package models

// Tag is
type Tag struct {
	Model
	Title       string
	Description string
	Articles    []Article `gorm:"many2many:ID"`
}
