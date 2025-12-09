/**
 * store the first element as the smallest value you've seen so far
 * compare this item to the next item in the array until you find a smaller number
 * if a smaller is found, designate that smaller number to be the new "minimum" and continue until the end of the array
 * if the "minimum" is not the value (index) you initially began with, swap the two values
 * Repeat this with the next element until the array is sorted
 * 
 * @param {*} array 
 */
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minimum = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minimum]) {
                minimum = j;
            }
        }
        
        if (i !== minimum) {
            let temp = array[i];
            array[i] = array[minimum];
            array[minimum] = temp;
        }
    }
    console.log(array);
    return array;
}

selectionSort([-3, 4, 12, -20, 1, 0, 99, 4])