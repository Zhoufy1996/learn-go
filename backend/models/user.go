package models

// User Model
type User struct {
	Model
	Name     string
	Password string
	Email    string `gorm:"default:''"`
}

// AutoMigrateUserModel func
func AutoMigrateUserModel() {
	db.AutoMigrate(&User{})
}
