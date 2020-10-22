package services

import "backend/models"

// GetSortNoByTableName is
func GetSortNoByTableName(tableName string) ([]uint, error) {
	sortNo, err := models.GetSortNoSliceByTableName(tableName)
	return sortNo, err
}
