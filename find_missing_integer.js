// Given an array of integers.
// The array is sorted, the first element is 1, the increment is 1.
// 1 element is missing.
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

// Solutin-1:
function findMissingElementS1(array) {
    if (array.length < 2) {
        return 'Invalid input. The array should have at least two elements.';
    }
    // Iterat throug and compare if the nextValue is only 1 greater
    for (let i = 0; i < array.length - 1; i++) {
        let value = array[i];
        let nextValue = array[i + 1];
        // If the nextValue is NOT only 1 greater, then return (value + 1)
        if (nextValue !== value + 1) {
            return value + 1;
        }
    }
    // Return if no missing element
    return 'No missing number.'
}

let numOfElements = 10000000;   // 10,000,000
let makeItMissing = 9542001;    //  9,542,001
let goodList = makeGoodArray(numOfElements);
let badList = makeBadArray(numOfElements, makeItMissing);

function test1() {
    let time1a = new Date().getTime();
    let missingNumber = findMissingElementS1(badList);
    let time1b = new Date().getTime();
    console.log(`\nSolution:\t1\nMissing number:\t${missingNumber}\nRun time:\t${time1b - time1a} ms`);
    console.log('----------');
}

test1();

// Solution-2: coming up shortly...