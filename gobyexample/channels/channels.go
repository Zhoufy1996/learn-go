package main

import "time"

func main() {
	// 阻塞，通道中缓冲的值数量为0
	messages := make(chan int)
	// go func() {
	// 	time.Sleep(time.Second * 5)
	// 	for {
	// 		msg := <-messages
	// 		println("receive", msg)
	// 	}
	// }()

	// go func() {
	// 	i := 0
	// 	for {
	// 		time.Sleep(time.Second * 1)
	// 		// 没有接收方，无法传递，阻塞了。
	// 		messages <- i
	// 		println("send:", i)
	// 		i++
	// 	}
	// }()

	go func() {
		for {
			// 没有发数据，阻塞了。
			println("start receive")
			msg := <-messages
			println("receive", msg)
		}
	}()

	go func() {
		time.Sleep(time.Second * 5)
		i := 0
		for {
			time.Sleep(time.Second * 1)
			messages <- i
			println("send:", i)
			i++
		}
	}()

	for {
	}
}
