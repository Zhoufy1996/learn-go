package main

import (
	"fmt"
)

func sum(nums ...int) int {
	var total int
	for _, num := range nums {
		total += num
	}
	return total
}

func main() {
	s := sum(1, 2, 3)
	fmt.Println(s)

	nums := []int{1, 2, 3}
	sum(nums...)
}
