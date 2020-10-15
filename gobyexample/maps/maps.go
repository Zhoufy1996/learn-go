package main

import (
	"fmt"
)

func main() {
	// 创建
	m := make(map[string]int)

	// set
	m["k1"] = 5

	// get

	// delete
	delete(m, "k2")

	// kv数量
	fmt.Println(len(m))

	// 键是否存在
	_, ok := m["k2"]
	println(ok)
}
