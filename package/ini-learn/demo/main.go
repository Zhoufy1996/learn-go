package main

import (
	"fmt"

	"github.com/go-ini/ini"
)

const (
	iniFileName = "config/app.ini"
)

type note struct {
	Note string `ini:"note"`
}

type appEnv struct {
	Foo string `ini:"foo"`
	Jo  *note
}

func main() {
	cfg := ini.Empty()
	var err error
	var app *appEnv
	err = cfg.Append(iniFileName)

	var initEnv = &appEnv{
		Foo: "oo",
		Jo: &note{
			Note: "123",
		},
	}
	if err != nil {
		fmt.Printf("%v has error: %v \n", iniFileName, err)
		fmt.Println("start read init config")

		app = initEnv

		defer fmt.Printf("create a new %v \n", iniFileName)

	} else {
		fmt.Printf("%v has exist\n", iniFileName)
		fmt.Println("start read config")

		app = initEnv
		err = cfg.MapTo(app)
	}

	err = ini.ReflectFrom(cfg, app)

	if err != nil {
		fmt.Println("init failed")
		return
	}

	fmt.Println("init success")
	err = cfg.SaveTo(iniFileName)

	if err != nil {
		fmt.Printf("save to %v failed \n", iniFileName)
		return
	}

	// if os.IsExist(iniFileName) {
	// 	// err = error("%v is not exist", iniFileName)
	// }

	// if err != nil {

	// }
}
