package setting

import (
	"fmt"

	"github.com/go-ini/ini"
)

const (
	iniFileName = "app.ini"
	iniFilePath = "config/"
)

const (
	defaultPort = 8080
)

// Database a
type Database struct {
	Type     string
	User     string
	Password string
	Host     string
	Name     string
}

// App a
type App struct {
	Port int
}

type env struct {
	App      *App
	Database *Database
}

// DatabaseSetting a
var DatabaseSetting = &Database{}

// SetUp a
func SetUp() {
	cfg := ini.Empty()
	var err error
	var initEnv = &env{
		App: &App{
			Port: 8080,
		},
		Database: &Database{
			Type:     "mysql",
			User:     "root",
			Password: "zfy1996514",
			Host:     "172.17.0.4:3306",
			Name:     "GoLearn",
		},
	}

	err = cfg.Append(iniFilePath + iniFileName)

	if err != nil {
		fmt.Printf("%v load failed: %v \n", iniFilePath+iniFileName, err)
		fmt.Println("use init config")

		defer fmt.Printf("create a new %v \n", iniFileName)

	} else {
		fmt.Printf("%v has exist\n", iniFileName)
		fmt.Println("start read config")

		err = cfg.MapTo(initEnv)

	}

	err = ini.ReflectFrom(cfg, initEnv)

	if err != nil {
		fmt.Println("init failed")
		return
	}

	err = cfg.SaveTo(iniFilePath + iniFileName)

	if err != nil {
		fmt.Printf("%v create failed \n", iniFilePath+iniFileName)
		return
	}

	fmt.Println("init success")

}
