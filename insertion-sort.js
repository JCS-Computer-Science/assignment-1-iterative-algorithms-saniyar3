function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let element = array[i]
		let index = i-1
		while (index >= 0 && array[index]>element) {
		array[index + 1] = array[index]
		index--;
		}
		array[index+1]=element;
	}
		return array;
	}
module.exports = insertionSort;	
/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */