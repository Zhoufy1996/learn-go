package main

import (
	"fmt"
	"time"
)

func main() {
	// 每次执行时，time.After(4 * time.Second)都会创建一个新的计时器通道
	c1 := make(chan string)

	go func() {
		time.Sleep(2 * time.Second)
		c1 <- "hh"
	}()

	select {
	case msg := <-c1:
		fmt.Println("c1: ", msg)
	case <-time.After(1 * time.Second):
		fmt.Println("error")
	}

	c2 := make(chan string)

	go func() {
		time.Sleep(2 * time.Second)
		c2 <- "hh"
	}()

	select {
	case msg := <-c2:
		fmt.Println("c2: ", msg)
	case <-time.After(4 * time.Second):
		fmt.Println("error")
	}
}
