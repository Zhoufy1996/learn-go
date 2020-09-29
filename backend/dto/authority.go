package dto

// LoginDto is
type LoginDto struct {
	Username string `binding:"required" json:"username"`
	Password string `binding:"required" json:"password"`
}
