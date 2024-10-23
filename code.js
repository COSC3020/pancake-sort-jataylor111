function flip(array, n) {
    // I apologize for the strange variable name I couldn't help myself 
    let spatula = 0;

    while (spatula < n) { // Complexity n, since no matter what it is incrementing along
        [array[spatula], array[n]] = [array[n], array[spatula]];
        spatula++
        n--
    }

    return array;
}

// *Use only flip() here to manipulate the array*
function pancakeSort(array) {
    // Set n to the length of the array
    let n = array.length;

    while (n > 1) { // Complexity of n because it just runs based of the length of the array and just increments down
        // find a max value to use as a flip point
        let max = 0;
        for (let i = 0; i < n; i++) { // Complexity of n due to it running from 0 to the length of the array
            if (array[i] > array[max]) {
                max = i;
            }
        }

        // Make the comparisons as long as max isn't out of bounds 
        if (max != n - 1) {
            if (max != 0) {
                flip(array, max);
            }
            flip(array, n - 1);
        }
        n--
    }

    return array;
}

// let arr = [9,6,2,9,3,4,8,7,5,2,6,9,3,8,1,5,4,7,2,6,0,1,9,2,8,5,1,2]
// console.log(pancakeSort(arr));
