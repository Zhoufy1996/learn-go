package main

import "fmt"

func main() {
	fmt.Print(longestSubstringWithoutRepeatingCharacters("abcabcbb") == 3, "\n")
	fmt.Print(longestSubstringWithoutRepeatingCharacters("bbbbb") == 1, "\n")
	fmt.Print(longestSubstringWithoutRepeatingCharacters("pwwkew") == 3, "\n")
	fmt.Print(longestSubstringWithoutRepeatingCharacters("") == 0, "\n")
}

func longestSubstringWithoutRepeatingCharacters(s string) int {
	letterMap := make(map[byte][2]int)
	for i := 0; i < len(s); i++ {
		b := s[i]
		offsetArr, ok := letterMap[b]
		if ok {
			letterMap[b] = [2]int{offsetArr[1], i}
		} else {
			letterMap[b] = [2]int{i, i}
		}
	}

	logestSubstringLength := 0

	for _, numArr := range letterMap {
		substringLength := numArr[1] - numArr[0]
		if substringLength > logestSubstringLength {
			logestSubstringLength = substringLength
		}
	}
	return logestSubstringLength
}
