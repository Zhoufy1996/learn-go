package main

import "fmt"

// & 取得内存地址，得到指针
// * 取得内存地址对应的值，得到值

func zeroval(ival int) {
	ival = 0
}

func zeroptr(iptr *int) {
	*iptr = 0
}

func main() {
	i := 1
	fmt.Println("initial:", i)

	zeroval(i)
	fmt.Println("zeroval:", i)

	// 通过 `&i` 语法来取得 `i` 的内存地址，即指向 `i` 的指针。
	zeroptr(&i)
	fmt.Println("zeroptr:", i)

	// 指针也是可以被打印的。
	fmt.Println("pointer:", &i)
}
