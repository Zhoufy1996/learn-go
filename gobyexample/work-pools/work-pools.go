package main

import (
	"fmt"
)

func workPool(jobs <-chan int, result chan<- bool) {
	fmt.Println("start work")
	fmt.Println("end work")
}

func main() {
	const numJobs = 5
	jobs := make(chan int)
	result := make(chan bool)
	const workChs = 3
	go func() {
		for i := 0; i < numJobs; i++ {
			jobs <- i
		}
	}()

}
