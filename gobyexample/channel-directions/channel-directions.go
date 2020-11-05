// 通道可以只读或只写

package main

import (
	"fmt"
	"time"
)

func ping(pings chan<- int) {
	i := 0
	for {
		time.Sleep(time.Second * 1)
		pings <- i
		i++
	}
}

func pong(pings <-chan int, pongs chan<- int) {
	for {
		msg := <-pings
		pongs <- msg
	}
}

func main() {
	pings := make(chan int, 1)
	pongs := make(chan int, 1)
	go ping(pings)
	go pong(pings, pongs)

	go func() {
		for {
			fmt.Println("ping: ", <-pings)
		}
	}()
	go func() {
		for {
			fmt.Println("pcng: ", <-pongs)
		}
	}()

	for {
	}
}
