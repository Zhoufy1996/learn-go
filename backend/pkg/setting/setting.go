package setting

import (
	"fmt"
	"log"

	"github.com/go-ini/ini"
)

// Database a
type Database struct {
	Type     string
	User     string
	Password string
	Host     string
	Name     string
}

var cfg *ini.File

// DatabaseSetting a
var DatabaseSetting = &Database{}

// SetUp a
func SetUp() {
	var err error
	cfg, err = ini.Load("config/app.ini")
	if err != nil {
		fmt.Printf("app.ini load fail %v", err)
	}

	mapTo("database", DatabaseSetting)
}

func mapTo(section string, v interface{}) {
	err := cfg.Section(section).MapTo(v)
	if err != nil {
		log.Fatalf("Cfg.MapTo %s err: %v", section, err)
	}
}
