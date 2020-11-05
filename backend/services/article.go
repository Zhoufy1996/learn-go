package services

import "backend/models"

// GetArticle is
func GetArticle(id uint) (*models.Article, error) {
	article, err := models.GetArticle(id)
	return article, err
}

// GetAllArticles is
func GetAllArticles() (*[]models.Article, error) {
	articles, err := models.GetAllArticles()
	return articles, err
}
