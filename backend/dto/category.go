package dto

// CreateCategoryDTO is
type CreateCategoryDTO struct {
	Title       string `binding:"required" json:"title"`
	Description string `json:"description"`
}

// UpdateCategoryDTO is
type UpdateCategoryDTO struct {
	ID          uint   `binding:"required" json:"id"`
	Description string `json:"description"`
	Title       string `json:"title"`
}
