function insertionSort(array) {
	for (let i = 1; i < nums.length; i++) {
		let a = i - 1
		let hi = nums[i]
		while (a >= 0 && nums[j] > hi) {
		nums[a + 1] = nums[j]
		j--
		}
	}
		nums[a+1] = hi
	}
	return nums
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger

	 do if statement that says if element two of the array is less than the first element then swap the elements, mayber make a functions that assendes the numbers so you dont have to make s aseperate funcation for all and use indexOf() function and find() (geeksforgeeks)
	 */

	return array;
}

module.exports = insertionSort;
