package services

import "backend/models"

// GetSortNoByTableName is
func GetSortNoByTableName(tableName string) ([]uint, error) {
	sortNo, err := models.GetSortNoSliceByTableName(tableName)
	return sortNo, err
}

// UpdateSortNo is
func UpdateSortNo(tableName string, ids string) error {
	err := models.UpdateSortNo(tableName, ids)
	return err
}
