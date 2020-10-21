package models

// Tag is
type Tag struct {
	Model
	Title       string    `gorm:"not null;unique" json:"title"`
	Description string    `gorm:"default:''" json:"description"`
	Articles    []Article `gorm:"many2many:article_tags;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;" json:"articles"`
	SortNo      int       `gorm:"default:-1" json:"sortNo"`
}

// GetTag 根据id获取标签
func GetTag(id uint) (*Tag, error) {
	var tag Tag
	err := db.Where("ID = ?", id).First(&tag).Error
	return &tag, err
}

// GetAllTags 获取所有标签
func GetAllTags() (*[]Tag, error) {
	var tags []Tag
	err := db.Find(&tags).Error
	return &tags, err
}

// GetTagsCount 获取标签数
func GetTagsCount() (int64, error) {
	var count int64
	err := db.Model(&Tag{}).Count(&count).Error

	if err != nil {
		return 0, err
	}
	return count, nil
}

// CreateTag 创建标签
func CreateTag(tag *Tag) error {
	err := db.Model(&Tag{}).Create(tag).Error
	return err
}

// UpdateTag 更新标签，需要有id
func UpdateTag(id uint, tag *Tag) error {
	err := db.Model(&Tag{}).Where("ID = ?", id).Updates(tag).Error
	return err
}

// DeleteTag 根据id删除标签
func DeleteTag(id uint) error {
	err := db.Where("ID = ?", id).Delete(&Tag{}).Error
	return err
}
