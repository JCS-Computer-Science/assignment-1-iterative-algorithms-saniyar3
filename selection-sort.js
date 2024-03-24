function selectionSort(array) {
	for (let i=0; i<array.length - 1; i++){
		let minI=i;
		for(let index= i+1; index <array.length; index++){
			if(array[index]<array[minI]){
				minI=index;
			}
		}
		if (minI !== i){
			[array[i], array[minI]]=[array[minI], array[i]];
		}
	}
	return array;
}
module.exports = selectionSort;
/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */