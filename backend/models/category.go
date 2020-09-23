package models

// Category is
type Category struct {
	Model
	Title       string `gorm:"unique"`
	Description string `gorm:"default:''"`
}

// CreateCategory is
func CreateCategory(category *Category) error {
	err := db.Model(&Category{}).Create(category).Error
	return err
}
