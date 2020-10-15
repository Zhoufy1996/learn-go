package main

import (
	"fmt"
	"time"
)

func main() {
	tickers := time.NewTicker(500 * time.Millisecond)
	done := make(chan bool)

	go func() {
		for {
			select {
			case t := <-tickers.C:
				fmt.Println("Tick at", t)
			case <-done:
				return
			}
		}
	}()

	// go func () {
	// 	for {
	// 		runtime.NumGoroutine()
	// 	}
	// }

	time.Sleep(1600 * time.Millisecond)
	tickers.Stop()

	done <- true
	fmt.Println("Ticker stopped")
}
