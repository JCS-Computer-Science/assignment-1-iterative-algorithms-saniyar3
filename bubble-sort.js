function bubbleSort(array) {
        function sortone(array) {}
        while (i < arr.size-1)
        if arr[i].to_i < arr[i+1].to_i
            arr[i]
        elsif arr[i].to_i > arr[i + 1].to_i
                arr[i+1], arr[i] = arr[i], arr[i+1]
        end 
        /* if you dont need end then dont use it, check if alternativer shorter way??  */
        puts arr[i]
        i += 1

    end
    }

    function sorttwo(array) {
    while (i < arr.size-2)
    if arr[i].to_i < arr[i+2].to_i
        arr[i]
    elsif arr[i].to_i > arr[i + 2].to_i
            arr[i+2], arr[i] = arr[i], arr[i+2]
    end 
    /* if you dont need end then dont use it, check if alternativer shorter way??  */
    puts arr[i]
    i += 2

    end
    }

    /*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

	return array;
    return sortone;
    return sorttwo;
}


module.exports = bubbleSort;
