function linearSearch(array, searchTerm) {
	let index=array.indexOf(searchTerm);
	return index;
}
module.exports = linearSearch;
/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 ** use infec of function or/and find index function
	 ** Return the index of the found element
	 */