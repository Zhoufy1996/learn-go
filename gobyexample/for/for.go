package main

import (
	"fmt"
)

func main() {
	// 单个循环条件
	i := 0
	for i <= 3 {
		println(i)
		i++
	}

	// 初始/条件/后续
	for j := 7; j <= 9; j++ {
		println(j)
	}

	// 没有循环条件 break
	for {
		println("loop")
		break
	}

	// continue
	for n := 0; n <= 5; n++ {
		if n%2 == 0 {
			continue
		}
		fmt.Println(n)
	}
}
