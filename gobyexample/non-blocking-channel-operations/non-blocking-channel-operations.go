// 非阻塞发送、接收、多路
package main

import (
	"fmt"
)

func main() {
	c1 := make(chan string)
	// singals := make(chan bool)

	select {
	case msg := <-c1:
		fmt.Println("received message:", msg)
	default:
		fmt.Println("no message received")
	}

	msg := "h1"
	select {
	case c1 <- msg:
		fmt.Println("sent message:", msg)
	default:
		fmt.Println("no message sent")
	}

	select {
	case msg := <-c1:
		fmt.Println("received message:", msg)
	case c1 <- msg:
		fmt.Println("sent message:", msg)
	default:
		fmt.Println("no message sent")
	}
}
