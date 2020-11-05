package main

import (
	"fmt"
	"time"
)

func main() {
	jobs := make(chan int)
	done := make(chan bool)

	go func() {
		for {
			// more, 管道关闭且无值
			job, more := <-jobs
			if more {
				fmt.Println("received job: ", job)
			} else {
				fmt.Println("received all jobs")
				done <- true
				// 没有return 会两次received all jobs
				// 第二次是从已经关闭的channel中读取数据
				return
			}
		}
	}()

	go func() {
		for i := 0; i < 10; i++ {
			jobs <- i
			println("sent job:", i)
		}
		println("close jobs")
		time.Sleep(time.Second)
		close(jobs)
	}()

	<-done
	fmt.Println("end")
	for {
	}
}
