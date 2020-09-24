package services

import (
	"backend/models"
)

// GetTag uint
func GetTag(id uint) (*models.Tag, error) {
	tag, err := models.GetTag(id)
	return tag, err
}

// GetAllTags is
func GetAllTags() (*[]models.Tag, error) {
	tags, err := models.GetAllTags()
	return tags, err
}

// GetTagsCount is
func GetTagsCount() (int64, error) {
	count, err := models.GetTagsCount()
	return count, err
}
