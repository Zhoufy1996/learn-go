package main

import "fmt"

func main() {
	result := add(2, 3)
	fmt.Print(result, result == 5)
}

func add(a int, b int) int {
	return a + b
}
