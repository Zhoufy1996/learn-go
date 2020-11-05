package main

import "time"

func main() {
	messages := make(chan int, 2)

	go func() {
		time.Sleep(time.Second * 3)
		println("begin receive:")
		for {
			msg := <-messages
			println("receive:", msg)
			time.Sleep(time.Second * 1)
		}
	}()

	go func() {
		i := 0
		println("begin send:")
		for {
			messages <- i
			println("send:", i)
			i++
		}
	}()

	for {
	}
}
