package models

// Category is
type Category struct {
	Model
	Title       string    `gorm:"unique" json:"title"`
	Description string    `gorm:"default:''" json:"description"`
	Articles    []Article `gorm:"foreignKey:CategoryID;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;" json:"articles"`
	SortNo      int       `gorm:"default:-1" json:"sortNo"`
}

// GetCategory 根据id获取类型
func GetCategory(id uint) (*Category, error) {
	var category Category
	err := db.Where("ID = ?", id).First(&category).Error
	return &category, err
}

// GetAllCategorys 获取所有类型
func GetAllCategorys() (*[]Category, error) {
	var categories []Category
	err := db.Find(&categories).Error
	return &categories, err
}

// GetCategoriesCount 获取类型数
func GetCategoriesCount() (int64, error) {
	var count int64
	err := db.Model(&Category{}).Count(&count).Error
	if err != nil {
		return 0, err
	}
	return count, err
}

// CreateCategory 创建类型
func CreateCategory(category *Category) error {
	err := db.Model(&Category{}).Create(category).Error
	return err
}

// UpdateCategory 更新类型，需要有id
func UpdateCategory(id uint, category *Category) error {
	err := db.Model(&Category{}).Where("ID = ?", id).Updates(category).Error
	return err
}

// DeleteCategory 根据id删除类型
func DeleteCategory(id uint) error {
	err := db.Where("ID = ?", id).Delete(&Category{}).Error
	return err
}
