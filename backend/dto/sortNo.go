package dto

// UpdateSortNoDTO is
type UpdateSortNoDTO struct {
	TableName string `binding:"required" json:"tableName"`
	IDs       string `binding:"required" json:"ids"`
}
