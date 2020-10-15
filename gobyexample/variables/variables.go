package main

import (
	"fmt"
)

// const var :=
// 变量命名 驼峰
// 文件夹命名 小写
func main() {
	var a = "initial"
	fmt.Println(a)

	var b, c int = 1, 2
	fmt.Println(b, c)

	var d = true
	fmt.Println(d)

	// 没有初始值，则为零值 0 nil "" false
	var e int
	fmt.Println(e)

	var foo bool
	fmt.Println(foo)

	f := "short"
	fmt.Println(f)
}
