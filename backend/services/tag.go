package services

import (
	"backend/dto"
	"backend/models"
)

// GetTag 根据id获取标签
func GetTag(id uint) (*models.Tag, error) {
	tag, err := models.GetTag(id)
	return tag, err
}

// GetAllTags 获取所有标签
func GetAllTags() (*[]models.Tag, error) {
	tags, err := models.GetAllTags()
	tagsSort, err := models.GetSortNoSliceByTableName("tag")
	if err != nil {
		return nil, err
	}
	var sortNoMap = make(map[uint]uint)

	for _, t := range tagsSort {
		sortNoMap[t] = t
	}

	models.AddSortNoToTag(tags, sortNoMap)

	return tags, nil
}

// GetTagsCount 获取标签数
func GetTagsCount() (int64, error) {
	count, err := models.GetTagsCount()
	return count, err
}

// CreateTag 创建标签
func CreateTag(newTag *dto.CreateTagDTO) error {
	var tag *models.Tag = &models.Tag{}
	tag.Title = newTag.Title
	tag.Description = newTag.Description
	err := models.CreateTag(tag)
	return err
}

// UpdateTag 更新标签，需要有id
func UpdateTag(updateTag *dto.UpdateTagDTO) error {
	var (
		tag *models.Tag = &models.Tag{}
		id  uint        = updateTag.ID
	)
	tag.Title = updateTag.Title
	tag.Description = updateTag.Description
	err := models.UpdateTag(id, tag)
	return err
}

// DeleteTag 根据id删除标签
func DeleteTag(id uint) error {
	err := models.DeleteTag(id)
	return err
}
