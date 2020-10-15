package main

import (
	"fmt"
)

func main() {
	// 创建数组，数组默认值是零值
	// 5 * 0
	var a [5]int

	// 赋值
	a[4] = 5

	// 获取长度
	fmt.Println(len(a))

	// 初始化
	b := [5]int{1, 2, 3, 4, 5}
	fmt.Println(b)

	// 多维
}
