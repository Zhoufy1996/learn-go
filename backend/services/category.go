package services

import (
	"backend/models"
)

// GetCategory is
func GetCategory(id uint) (*models.Category, error) {
	category, err := models.GetCategory(id)
	return category, err
}

// GetAllCategories is
func GetAllCategories() (*[]models.Category, error) {
	categories, err := models.GetAllCategorys()
	return categories, err
}

// GetCategoriesCount is
func GetCategoriesCount() (int64, error) {
	count, err := models.GetCategoriesCount()
	return count, err
}
