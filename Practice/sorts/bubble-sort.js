/**
 * Start looping from a variable called i - the end of the array towards the beginning
 * Start an inner loop with a variable called j from the beginning until i - 1
 * if arr[j] is greater than arr[j+1], swap those two values!
 * return the sorted array
 */

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log(array)
    return array;
}

function optimizedBubbleSort(array) {
    let noSwaps;
    for (let i = array.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    console.log(array)
    return array;
}

bubbleSort([1, 32, 4, 100, 9, 50]);

optimizedBubbleSort([1, 32, 4, 100, 9, 50]);