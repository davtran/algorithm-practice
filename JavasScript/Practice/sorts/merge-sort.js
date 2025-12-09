function merge(array1, array2) {
    let results = [];
    let array1Counter = 0;
    let array2Counter = 0;

    while(array1Counter < array1.length && array2Counter < array2.length) {
        if (array2[array2Counter] > array1[array1Counter]) {
            results.push(array1[array1Counter]);
            array1Counter++;
        } else {
            results.push(array2[array2Counter]);
            array2Counter++;
        }
    }

    while(array1Counter < array1.length) {
        results.push(array1[array1Counter]);
        array1Counter++;
    }

    while(array2Counter < array2.length) {
        results.push(array2[array2Counter]);
        array2Counter++;
    }
    console.log(`merge(): ${results}`);
    return results;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let midPoint = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, midPoint));
    let right = mergeSort(array.slice(midPoint));
    return merge(left, right);
}


// merge([1, 10, 50], [2, 14, 99, 100])
mergeSort([12, 3, 20, 7, 99, 123]);