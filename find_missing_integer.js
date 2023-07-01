// Given a sorted array of integers.
// The integers are from 1 to n, increment is 1.
// One of the elements is missing, but not the 1st or n-th element.
// Task: Find the missing element.


// Solution-1:
// for... loop
function findMissingElementS1(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let value = array[i];
        let nextValue = array[i + 1];
        if (nextValue !== value + 1) {
            return value + 1;
        }
    }
    return 'No missing number.'
}


// Solution-2:
// binary search
function findMissingElement(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (right - left > 1) {
        let middle = Math.floor((right + left) / 2);
        if (middle + 1 === arr[middle]) {
            left = middle;
        } else {
            right = middle;
        }
    }
    return arr[left] + 1;
}

