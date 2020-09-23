package models

// Category is
type Category struct {
	Model
	Title       string    `gorm:"unique"`
	Description string    `gorm:"default:''"`
	Articles    []Article `gorm:"foreignKey:CategoryID;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}

// CreateCategory is
func CreateCategory(category *Category) error {
	err := db.Model(&Category{}).Create(category).Error
	return err
}
