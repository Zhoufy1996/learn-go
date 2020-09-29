package services

import (
	"backend/dto"
	"backend/models"
)

// UserIsExist is
func UserIsExist(user *dto.LoginDto) (*models.User, error) {
	var loginUser *models.User = &models.User{}

	loginUser.Name = user.Username
	loginUser.Password = user.Password

	u, err := models.UserIsExist(loginUser)
	return u, err
}
