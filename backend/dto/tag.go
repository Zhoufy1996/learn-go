package dto

// CreateTagDTO is
type CreateTagDTO struct {
	Title       string `binding:"required" json:"title"`
	Description string `json:"description"`
}

// UpdateTagDTO is
type UpdateTagDTO struct {
	ID          uint   `binding:"required" json:"id"`
	Description string `json:"description"`
	Title       string `json:"title"`
}
