function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// aka partition
function pivot(array, start = 0, end = array.length + 1) {
    let pivot = array[start];
    let swapIndex = start;

    for (let i = start + 1; i < array.length; i++) {
        if (pivot > array[i]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }
    swap(array, start, swapIndex);
    return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);
        //left side
        quickSort(array, left, pivotIndex - 1);
        //right side
        quickSort(array, pivotIndex + 1, right);
    }
    console.log(array);
    return array;
}

pivot([1, 6, 8, 2, 100, 32, 0])
quickSort([1, 2, 11, 98, 3, 40])