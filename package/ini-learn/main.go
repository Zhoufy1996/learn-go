package main

import (
	"fmt"
	"os"

	"github.com/go-ini/ini"
)

type paths struct {
	protocol string
}

type cfg struct {
	paths paths
}

func main() {
	cfg, err := ini.Load("my.ini")
	if err != nil {
		fmt.Printf("Fail to read file: %v", err)
		os.Exit(1)
	}
	// fmt.Println("App Mode", cfg.Section("").Key("app_mode").String())
	// fmt.Println("Data Path", cfg.Section("paths").Key("data").String())

	// // 如果值不是http or https 则 使用默认值http
	// fmt.Println("Protocol Server", cfg.Section("server").Key("protocol").In("http", []string{"http", "https"}))

	// // 自动类型转换
	// fmt.Printf("Post Number: %[1]T %[1]d \n", cfg.Section("server").Key("http_port").MustInt())

	// // 修改
	// cfg.Section("").Key("app_mode").SetValue("production")
	// cfg.SaveTo("my.ini.local")

	// // 空白文件
	// cfg = ini.Empty()

	// cfg.Append("my.ini")
	// cfg.Append("my.ini.local")

	// fmt.Println("覆盖", cfg.Section("").Key("app_mode").String())
	// // 打开之后不需要退出吗

	// // 跳过无法识别的行(非键值对)
	// cfg, err = ini.LoadSources(ini.LoadOptions{
	// 	SkipUnrecognizableLines: true,
	// }, "err.ini")
	// if err != nil {
	// 	fmt.Printf("Fail to read file: %v", err)
	// 	os.Exit(1)
	// }
	// _, err := ini.LoadSources(ini.LoadOptions{
	// 	SkipUnrecognizableLines: false,
	// }, "app.ini")
	// if err != nil {
	// 	fmt.Printf("Fail to read file: %v", err)
	// 	os.Exit(1)
	// }

	cfg.GetSection("section name")

	sec, err := cfg.GetSection(ini.DEFAULT_SECTION)

	sec := cfg.Section("section name")

	secs := cfg.Sections()

	names := cfg.SectionStrings()
	fmt.Print("ok \n")
}
