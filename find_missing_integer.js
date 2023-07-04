// Given a sorted array of integers.
// The integers are from 1 to n, increment is 1.
// One of the elements is missing, but not the 1st or n-th element.
// Task: Find the missing element.

// This returns a GOOD array with NO missing element
function makeGoodArray(numOfElements = 10) {
    if (numOfElements < 2) {
        numOfElements = 2;
    }
    let array = new Array(numOfElements).fill(null);
    return array.map((element, index) => element = index + 1);
}

// This returns a BAD array WITH missing element which is the 'makeItMissing'
function makeBadArray(numOfElements = 10, makeItMissing = 5) {
    if (numOfElements < 2) {
        numOfElements = 2
    }
    let array = makeGoodArray(numOfElements);
    if (makeItMissing < array[0] || makeItMissing > array[array.length - 1]) {
        makeItMissing = Math.round((array.length - 1) / 2 - 0.5)
    }
    let indexToBeDeleted = array.indexOf(makeItMissing);
    array.splice(indexToBeDeleted, 1);
    return array;
}

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
function findMissingElementS2(arr) {
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
