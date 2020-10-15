package main

import (
	"fmt"
	"time"
)

func main() {
	done := make(chan bool)
	go func() {
		fmt.Println("sleep start")
		time.Sleep(time.Second * 5)
		fmt.Println("sleep end")
		done <- true
	}()

	<-done
	fmt.Println("done")
}
