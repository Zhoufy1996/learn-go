package models

// Tag is
type Tag struct {
	Model
	Title       string    `gorm:"unique"`
	Description string    `gorm:"default:''"`
	Articles    []Article `gorm:"many2many:article_tags;References:TagIDs;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	ArticleIDs  []uint
}

// CreateTag is
func CreateTag(tag *Tag) error {
	err := db.Model(&Tag{}).Create(tag).Error
	return err
}
