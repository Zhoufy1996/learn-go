package main

import (
	"errors"
	"fmt"
)

func f1(arg int) (int, error) {
	if arg == 42 {
		return -1, errors.New("can't work with 42")
	}

	return arg + 3, nil
}

type argError struct {
	arg  int
	prob string
}

func (e *argError) Error() string {
	return fmt.Sprintf("%d - %s", e.arg, e.prob)
}

func f2(arg int) (int, error) {
	if arg == 42 {
		return -1, &argError{arg: arg, prob: "can't work with it"}
	}

	return arg + 3, nil
}

func test(f func(arg int) (int, error), name string) {
	for _, i := range []int{7, 42} {
		if r, e := f(i); e != nil {
			fmt.Println(name, "failed:", e)
		} else {
			fmt.Println(name, "worked:", r)
		}
	}
}

func main() {
	test(f1, "f1")
	test(f2, "f2")

	_, e := f2(42)

	// 反射
	if ae, ok := e.(*argError); ok {
		fmt.Println(ae.arg)
		fmt.Println(ae.prob)
	}
}
