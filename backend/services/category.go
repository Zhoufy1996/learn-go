package services

import (
	"backend/dto"
	"backend/models"
)

// GetCategory 根据id获取类型
func GetCategory(id uint) (*models.Category, error) {
	category, err := models.GetCategory(id)
	return category, err
}

// GetAllCategories 获取所有类型
func GetAllCategories() (*[]models.Category, error) {
	categories, err := models.GetAllCategorys()
	return categories, err
}

// GetCategoriesCount 获取类型数
func GetCategoriesCount() (int64, error) {
	count, err := models.GetCategoriesCount()
	return count, err
}

// CreateCategory 创建类型
func CreateCategory(newCategory *dto.CreateCategoryDTO) error {
	var category *models.Category = &models.Category{}
	category.Title = newCategory.Title
	category.Description = newCategory.Description
	err := models.CreateCategory(category)
	return err
}

// UpdateCategory 更新标签，需要有id
func UpdateCategory(updateCategory *dto.UpdateCategoryDTO) error {
	var (
		category *models.Category = &models.Category{}
		id       uint             = updateCategory.ID
	)
	category.Title = updateCategory.Title
	category.Description = updateCategory.Description
	err := models.UpdateCategory(id, category)
	return err
}

// DeleteCategory 根据id删除类型
func DeleteCategory(id uint) error {
	err := models.DeleteCategory(id)
	return err
}
