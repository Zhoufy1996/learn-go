package models

type Tag struct {
	Model
	Name        string `json:"name"`
	CreatedUser User
	DeletedUser User
	State       int `json:"state"`
}
