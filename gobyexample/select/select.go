package main

import (
	"fmt"
	"time"
)

func main() {
	c1 := make(chan int)
	c2 := make(chan int)

	go func() {
		i := 0
		for {
			time.Sleep(1 * time.Second)
			c1 <- i
			i++
		}
	}()

	go func() {
		i := 0
		for {
			time.Sleep(2 * time.Second)
			c2 <- i
			i++
		}
	}()

	for {
		select {
		case msg1 := <-c1:
			fmt.Println("c1 received", msg1)
		case msg2 := <-c2:
			fmt.Println("c2 received", msg2)
		}
	}
}
