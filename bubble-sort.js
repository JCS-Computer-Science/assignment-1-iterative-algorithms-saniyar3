function bubbleSort(array) {
    let swap= true;
    for (let i= 0; i<array.length-1 && swap; i++){
        swap=false;
        for(let index = 0; index<array.length -i -1; index++){
            if (array[index]>array[index+1]){
                let Switch= array[index];
                array[index]=array[index+1];
                array[index+1]=Switch;
                swap=true
            }
        }
    }
    return array;
}
module.exports = bubbleSort;
    /* use for loop
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */