function linearSearch(array, searchTerm) {
	// Javascript code to linearly search x in arr[]. 
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 ** use infec of function or/and find index function
	 ** Return the index of the found element
	 */

	 for (var i = 0; i < arr.length; i++) {
		if (arr[i] === item) { 
		  return i;
		}
	  }
	return null;
}

module.exports = linearSearch;
