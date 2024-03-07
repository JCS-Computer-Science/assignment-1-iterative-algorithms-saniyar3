function bubbleSort(array) {
    let swap=0
    while(swap!==-0)
    for(i<array.length; i++;){
        let firstElement= array[i]
        let secondElement= array[i+1]
        if(firstElement>secondElement)
            firstElement=secondElement
    }
    return array;
}
    //end
    /* use for loop
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

	//return array;
    //return sortone;
    //return sorttwo;


bubblesort(arr);
module.exports = bubbleSort;
