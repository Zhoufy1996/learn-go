package models

// User Model
type User struct {
	Model
	Name     string `gorm:"unique"`
	Password string `gorm:"default:123456"`
	Email    string `gorm:"default:''"`
}

// CreateUser is
func CreateUser(user *User) error {
	err := db.Model(&User{}).Create(user).Error
	return err
}
