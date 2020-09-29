package models

// User Model
type User struct {
	Model
	Name     string    `gorm:"unique" json:"name"`
	Password string    `gorm:"default:123456"l "json:"password""`
	Email    string    `gorm:"default:''" json:"email"`
	Articles []Article `gorm:"foreignKey:UserID;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;" json:"articles"`
}

// CreateUser is
func CreateUser(user *User) error {
	err := db.Model(&User{}).Create(user).Error
	return err
}

// UserIsExist is
func UserIsExist(user *User) (*User, error) {
	var u User
	err := db.Where("Name = ? and Password = ?", user.Name, user.Password).First(&u).Error
	return &u, err
}
