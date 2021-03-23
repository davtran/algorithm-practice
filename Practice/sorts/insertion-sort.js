/**
 * start by picking the second element in the array
 * now compare the second element with the one efore it and swap if necessary
 * continue to next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
 * Repeat until the array is sorted
 */
function insertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        let currentValue = array[i];
        for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = currentValue;
    }
    console.log(array);
    return array;
}

function recommendedInsertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    console.log(arr)
    return arr;
}

insertionSort([2, 38, 25, 7, 15, 88])
recommendedInsertionSort([2, 38, 25, 7, 15, 88])