package models

type Category struct {
	Model
	Name        string `json:"name"`
	CreatedUser User
	DeletedUser User
	State       int `json:"state"`
}
