package models

// Article is
type Article struct {
	Model
	Title       string `gorm:"unique"`
	SubTitle    string
	CreateUser  User     `gorm:"foreignKey:ID"`
	Description string   `gorm:"default:''"`
	Body        string   `gorm:"default:''"`
	Category    Category `gorm:"foreignKey:ID"`
	Tags        []Tag    `gorm:"many2many:ID"`
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
