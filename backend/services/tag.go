package services

import (
	"backend/models"
	"fmt"
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

// TagModel is
type TagModel struct {
	Title       string `binding:"required" json:"title"`
	Description string `json:"description"`
}

// CreateTag is
func CreateTag(newTag *TagModel) error {
	var tag *models.Tag = &models.Tag{}
	tag.Title = newTag.Title
	tag.Description = newTag.Description
	err := models.CreateTag(tag)
	return err
}

// UpdateTagModel is
type UpdateTagModel struct {
	ID          uint   `binding:"required" json:"id"`
	Description string `json:"description"`
	Title       string `json:"title"`
}

// UpdateTag is
func UpdateTag(updateTag *UpdateTagModel) error {
	var (
		tag *models.Tag = &models.Tag{}
		id  uint        = updateTag.ID
	)
	fmt.Println("service")
	tag.Title = updateTag.Title
	tag.Description = updateTag.Description
	err := models.UpdateTag(id, tag)
	return err
}

// DeleteTag is
func DeleteTag(id uint) error {
	err := models.DeleteTag(id)
	return err
}
