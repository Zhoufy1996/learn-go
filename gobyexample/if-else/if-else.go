package main

func main() {
	// if else
	if 8%2 == 0 {
		println("even number")
	} else {
		println("odd number")
	}
	// if
	if true {
		println("ha ha")
	}

	// if else if else
	var x int = 6
	if x%2 == 0 {
		println("It's divisible by 2")
	} else if x%3 == 0 {
		println("It's divisible by 3")
	} else {
		println("It's not divisible by2 or 3")
	}
}
