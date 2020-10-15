package main

func main() {
	ch := make(chan int, 5)

	for i := 0; i < 5; i++ {
		ch <- i
	}

	// 不close会报错
	// all goroutines are asleep - deadlock!
	// 主线程在等待一个永远不会接收的值，自杀
	// close(ch)
	// for i := range ch {
	// 	println(i)
	// }
	go func() {
		for i := range ch {
			println(i)
		}
	}()
	for {
	}
}
