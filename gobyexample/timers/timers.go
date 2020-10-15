// 定时器可以取消
package main

import (
	"fmt"
	"runtime"
	"time"
)

func main() {

	timer1 := time.NewTimer(2 * time.Second)
	<-timer1.C
	fmt.Println("Timer 1 fired")

	timer2 := time.NewTimer(2 * time.Second)

	go func() {
		for {
			fmt.Println("goroutines: ", runtime.NumGoroutine())
			time.Sleep(time.Second)
		}
	}()

	// time.Sleep(2 * time.Second)

	// 怎么关闭这个协程
	go func() {
		fmt.Println("start")
		t, more := <-timer2.C
		fmt.Println(t)
		fmt.Println(more)
		fmt.Println("timer 2 fired")
	}()

	// time.Sleep(2 * time.Second)

	stop2 := timer2.Stop()

	if stop2 {
		fmt.Println("Timer 2 stopped")
	}

	for {
	}
}
