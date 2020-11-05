package main

import (
	"fmt"
	"time"
)

func main() {
	go func() {
		time.Sleep(2 * time.Second)
		fmt.Println("go")
	}()

	go func() {
		time.Sleep(1 * time.Second)
		fmt.Println("go go")
	}()

	// 更好的方法是使用 [WaitGroup](waitgroups)
	time.Sleep(4 * time.Second)
	fmt.Println("done")
}
