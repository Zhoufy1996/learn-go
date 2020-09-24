package services

import "backend/models"

// GetArticle is
func GetArticle(id uint) (*models.Article, error) {
	article, err := models.GetArticle(id)
	return article, err
}
