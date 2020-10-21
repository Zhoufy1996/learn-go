package models

import "gorm.io/gorm/clause"

// Article is
type Article struct {
	Model
	Title       string `gorm:"unique" json:"title"`
	SubTitle    string `json:"subTitle"`
	UserID      uint   `json:"userId"`
	Description string `gorm:"default:''" json:"description"`
	Body        string `gorm:"default:''" json:"body"`
	CategoryID  uint   `json:"categoryId"`
	Tags        []Tag  `gorm:"many2many:article_tags;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;" json:"tags"`
	SortNo      int    `gorm:"default:-1" json:"sortNo"`
}

// CreateArticle is
func CreateArticle(article *Article) error {

	err := db.Model(&Article{}).Create(article).Error
	return err
}

// GetArticle is
func GetArticle(id uint) (*Article, error) {
	var article Article
	err := db.Preload(clause.Associations).Where("ID = ?", id).First(&article).Error
	if err != nil {
		return nil, err
	}

	return &article, nil
}

// GetAllArticles is
func GetAllArticles() (*[]Article, error) {
	var articles []Article
	err := db.Preload(clause.Associations).Find(&articles).Error
	return &articles, err
}

// GetArticleCount is
func GetArticleCount() (int64, error) {
	var count int64
	err := db.Model(&Article{}).Count(&count).Error
	if err != nil {
		return 0, err
	}
	return count, err
}

// UpdateArticle is
func UpdateArticle(id uint, article *Article) error {
	err := db.Model(&Article{}).Where("ID = ? ", id).Updates(article).Error
	return err
}

// DeleteArticle is
func DeleteArticle(id uint) error {
	err := db.Where("ID = ?", id).Delete(&Article{}).Error
	return err
}
