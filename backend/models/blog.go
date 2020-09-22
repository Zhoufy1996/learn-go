package models

// Category is
type Category struct {
	Model
	Title       string
	Description string
}

// Tag is
type Tag struct {
	Model
	Title       string
	Description string
}

// Article is
type Article struct {
	Model
	Title       string
	SubTitle    string
	CreateUser  User
	Description string
	Body        string
	Category    Category
	Tags        []Tag
}

// AutoMigrateBlogModel func
func AutoMigrateBlogModel() {
	db.AutoMigrate(&Category{}, &Tag{}, &Article{})
}
