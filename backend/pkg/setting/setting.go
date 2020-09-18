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
var (
	DatabaseSetting = &Database{}
	AppSetting      = &App{}
)

func getCfg() *env {
	defer println("config init end")
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

	} else {
		fmt.Printf("%v has exist\n", iniFileName)
		fmt.Println("start read config")

		err = cfg.MapTo(initEnv)

		if err != nil {
			fmt.Printf("%v has error %v \n", iniFileName, err)
			fmt.Println("use init config")
			return initEnv
		}
	}

	fmt.Printf("start update %v \n", iniFileName)
	err = nil

	err = ini.ReflectFrom(cfg, initEnv)

	err = cfg.SaveTo(iniFilePath + iniFileName)

	if err != nil {
		fmt.Printf("%v update failed \n", iniFilePath+iniFileName)
		fmt.Println(err)
		return initEnv
	}

	fmt.Println("config init success")
	return initEnv
}

// SetUp a
func SetUp() {
	cfg := getCfg()
	DatabaseSetting = cfg.Database
	AppSetting = cfg.App

	fmt.Printf("DatabaseSetting: %v \n", DatabaseSetting)
	fmt.Printf("AppSetting: %v \n", AppSetting)
	fmt.Println("setting init end")
}
