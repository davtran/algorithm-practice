function getDigit(number, place) {
    console.log(`Digit: ${Math.floor(Math.abs(number) / Math.pow(10, place)) % 10}`);
    return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

function digitCount(number) {
    if (number === 0) return 1;
    console.log(`Digit count: ${Math.floor(Math.log10(Math.abs(number))) + 1}`);
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function mostDigits(numbers) {
    let maxDigits = 0;
    for (let i = 0; i < numbers.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(numbers[i]));
    }
    console.log(maxDigits);
    return maxDigits;
}

// aka bucket sort
// only works with numbers
// does not compare
function radixSort(numbers) {
    let maxDigitsCount = mostDigits(numbers);
    console.log(maxDigitsCount);
    for (let k = 0; k < maxDigitsCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < numbers.length; i++) {
            let digit = getDigit(numbers[i], k);
            digitBuckets[digit].push(numbers[i]);
        }
        numbers = [].concat(...digitBuckets);
    }
    console.log(numbers);
    return numbers;
}

getDigit(7323, 2);
digitCount(423);
mostDigits([1000]);
radixSort([1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29])