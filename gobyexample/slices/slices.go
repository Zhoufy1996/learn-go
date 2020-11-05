package main

import (
	"fmt"
)

func main() {
	// 数据和切片都是引用类型，传递一定的信息量
	// 创建切片 make
	var s = make([]int, 3)
	fmt.Println(s)
	// 数组切片

	// a = append(a, v1, v2)

	// copy(a, b) 把b赋值给a

	// 多维结构，内部slice长度可以不一致
}
