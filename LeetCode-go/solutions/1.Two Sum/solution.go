package main

func main() {
	input, target, result := []int{2, 7, 11, 15}, 9, [2]int{0, 1}
	// compareTowArr(towSum(input, target), result)
	print(compareTowArr(towSum(input, target), result), "\n")
	print(compareTowArr(towSum([]int{3, 2, 4}, 6), [2]int{1, 2}), "\n")
	print(compareTowArr(towSum([]int{3, 3}, 6), [2]int{0, 1}), "\n")
}

// O{n}
func towSum(input []int, target int) [2]int {
	diffMap := make(map[int]int)
	for index, num := range input {
		diff := target - num
		diffIndex, ok := diffMap[diff]
		if ok {
			return [2]int{diffIndex, index}
		}
		diffMap[num] = index
	}
	return [2]int{0, 1}
}

func towSum2(input []int, target int) [2]int {
	diffMap := make(map[int]int)
	for index, num := range input {
		diffMap[num] = index
	}

	for index, num := range input {
		diffIndex, ok := diffMap[target-num]
		if ok {
			return [2]int{diffIndex, index}
		}
	}

	return [2]int{0, 1}
}

func compareTowArr(source [2]int, target [2]int) bool {
	for index, num := range source {
		if num != target[index] {
			return false
		}
	}
	return len(source) == len(target)
}
