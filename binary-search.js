function binarySearch(array, searchTerm) {
	
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	function findmiddle(array) {
		var middle= arr[math.floor((arr.length - 1) /2)];
		
		for (var isMiddleHigher= findindexof(middle); i <arr.length; i++){
			if (isMiddleHigher > arr) {
				largest= isMiddleHigher
			}
		}
		console.log(largest)
	}

	return null;
}

module.exports = binarySearch;
