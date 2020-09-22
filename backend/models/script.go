package models

func runScript() {
	superUser := &User{
		Name:     "zhou",
		Password: "123456",
	}
	db.Create(superUser)
}
