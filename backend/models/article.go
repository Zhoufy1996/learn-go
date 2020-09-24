package models

// Article is
type Article struct {
	Model
	Title       string `gorm:"unique"`
	SubTitle    string
	UserID      uint
	Description string `gorm:"default:''"`
	Body        string `gorm:"default:''"`
	CategoryID  uint
	Tags        []Tag `gorm:"many2many:article_tags;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}

// CreateArticle is
func CreateArticle(article *Article) error {

	err := db.Model(&Article{}).Create(article).Error
	return err
}

// GetArticle is
func GetArticle(id uint) (*Article, error) {
	var article *Article
	err := db.Where("ID = ?", id).First(article).Error
	return article, err
}

// GetAllArticles is
func GetAllArticles() ([]*Article, error) {
	var articles []*Article
	err := db.Find(articles).Error
	return articles, err
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
