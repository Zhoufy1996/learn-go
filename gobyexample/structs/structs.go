package main

import (
	"fmt"
)

type person struct {
	age  int
	name string
}

func main() {
	// 创建,省略的字段被初始化为零值
	p := person{age: 1, name: "bob"}
	// 指针
	pp := &p

	// get
	a := pp.age

	// set
	pp.age = 4

	fmt.Println(a)
}
