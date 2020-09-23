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
	Tags        []Tag `gorm:"many2many:article_tags;References:ArticleIDs;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	TagIDs      []uint
}

// CreateArticle is
func CreateArticle(article *Article) error {
	err := db.Model(&Article{}).Create(article).Error
	return err
}

// GetArticle is
func GetArticle() {}

// GetArticles is
func GetArticles() {}

// GetArticleCount is
func GetArticleCount() {}

// UpdateArticle is
func UpdateArticle() {}

// DeleteArticle is
func DeleteArticle() {}

// ClearArticle is
func ClearArticle() {}
