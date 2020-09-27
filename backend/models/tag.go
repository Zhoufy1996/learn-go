package models

// Tag is
type Tag struct {
	Model
	Title       string    `gorm:"not null;unique" json:"title"`
	Description string    `gorm:"default:''" json:"description"`
	Articles    []Article `gorm:"many2many:article_tags;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;" json:"articles"`
}

// GetTag is
func GetTag(id uint) (*Tag, error) {
	var tag Tag
	err := db.Where("ID = ?", id).First(&tag).Error
	return &tag, err
}

// GetAllTags is
func GetAllTags() (*[]Tag, error) {
	var tags []Tag
	err := db.Find(&tags).Error
	return &tags, err
}

// GetTagsCount is
func GetTagsCount() (int64, error) {
	var count int64
	err := db.Model(&Tag{}).Count(&count).Error

	if err != nil {
		return 0, err
	}
	return count, nil
}

// CreateTag is
func CreateTag(tag *Tag) error {
	err := db.Model(&Tag{}).Create(tag).Error
	return err
}

// UpdateTag is
func UpdateTag(id uint, tag *Tag) error {
	err := db.Model(&Tag{}).Where("ID = ?", id).Updates(tag).Error
	return err
}

// DeleteTag is
func DeleteTag(id uint) error {
	err := db.Where("ID = ?", id).Delete(&Tag{}).Error
	return err
}
