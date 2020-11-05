package main

import (
	"fmt"
	"math"
)

const s string = "constant"

func main() {
	fmt.Println(s)

	// untyped
	const n = 5000000

	// untyped
	const d = 3e20 / n

	fmt.Println(d)

	// 显示类型转化
	fmt.Println(int64(d))

	// 根据上下文需要自动确定类型
	fmt.Println(math.Sin(n))
}
