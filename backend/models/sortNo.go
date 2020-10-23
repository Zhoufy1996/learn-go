package models

import (
	"strconv"
	"strings"

	"gorm.io/gorm"
)

// Sortno is
type Sortno struct {
	Model
	TableName string `gorm:"not null;unique" json:"tableName"`
	IDs       string `json:"ids"`
}

// GetAllSortNos is
func GetAllSortNos() (*[]Sortno, error) {
	var sortNos []Sortno
	err := db.Find(&sortNos).Error
	return &sortNos, err
}

// GetSortNoByTableName is
func GetSortNoByTableName(tableName string) (*Sortno, error) {
	var sortNo Sortno
	err := db.Where("table_name = ?", tableName).First(&sortNo).Error
	return &sortNo, err
}

// GetSortNoSliceByTableName is
func GetSortNoSliceByTableName(tableName string) ([]uint, error) {
	sortNo, err := GetSortNoByTableName(tableName)
	if err != nil {
		return nil, err
	}

	result := make([]uint, 0)
	for _, s := range strings.Split(sortNo.IDs, ",") {
		id, _ := strconv.ParseUint(s, 10, 64)
		result = append(result, uint(id))
	}

	return result, nil
}

// CreateSortNo is
func CreateSortNo(tableName string, ids string) error {
	err := db.Model(&Sortno{}).Create(&Sortno{
		TableName: tableName,
		IDs:       ids,
	}).Error
	return err
}

// UpdateSortNo is
func UpdateSortNo(tableName string, ids string) error {
	err := db.Model(&Sortno{}).Where("table_name = ?", tableName).Updates(&Sortno{
		IDs: ids,
	}).Error
	return err
}

// CreateLackSortNoByTableName is
func CreateLackSortNoByTableName(tableName string, ids string) error {
	_, err := GetSortNoByTableName(tableName)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			err = CreateSortNo(tableName, ids)
			return err
		}
	}
	return err
}
