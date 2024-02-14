function binarySearch(array, searchTerm) {
	
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	 while (i != searchTerm) {
	function findmiddle(array) {
		//finds middle of the array using the length and dividing by 2
			var middle= arr[math.floor((arr.length - 1) /2)];
			
			for (var isMiddleHigher= findindexof(middle); i <arr.length; i++){
				if (isMiddleHigher > arr) {
					largest= isMiddleHigher
				}
			}
			console.log(largest)
	  }

	if (findmiddle(array)=searchterm){
		return findmiddle
		console.log(findmiddle)
	}
	  

	//function findmiddle2(array) {
		//var middle2= arr[math.floor((arr.length - 1) /2)];
			
		//for (var isMiddleHigher2= findindexof(middle2); i <arr.length; i++){
			//if (isMiddleHigher2 > arr) {
				//largest2= isMiddleHigher2
		//	}
		//}
			//console.log(largest2)
	//}

	return null;
}

module.exports = binarySearch;
