package models

// Category is
type Category struct {
	Model
	Title       string    `gorm:"unique"`
	Description string    `gorm:"default:''"`
	Articles    []Article `gorm:"foreignKey:CategoryID;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}

// GetCategory is
func GetCategory(id uint) (*Category, error) {
	var category *Category
	err := db.Where("ID = ?", id).First(category).Error
	return category, err
}

// GetAllCategorys is
func GetAllCategorys() ([]*Category, error) {
	var categories []*Category
	err := db.Find(categories).Error
	return categories, err
}

// GetCategorysCount is
func GetCategorysCount() (int64, error) {
	var count int64
	err := db.Model(&Category{}).Count(&count).Error
	if err != nil {
		return 0, err
	}
	return count, err
}

// CreateCategory is
func CreateCategory(category *Category) error {
	err := db.Model(&Category{}).Create(category).Error
	return err
}

// UpdateCategory is
func UpdateCategory(id uint, category *Category) error {
	err := db.Model(&Category{}).Where("ID = ?", id).Updates(category).Error
	return err
}

// DeleteCategory is
func DeleteCategory(id uint) error {
	err := db.Where("ID = ?", id).Delete(&Category{}).Error
	return err
}
