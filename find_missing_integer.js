// Given a sorted array of integers.
// The integers are from 1 to n, increment is 1.
// 1 element is missing (but not the n-th element).
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
// For Loop
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

// Solution-2:
// Binary Search
function findMissingElementS2(arrayGood, arrayBad) {
    //
    let startIndex = 0;
    let endIndex = arrayGood.length - 1;
    let middleIndex = startIndex + Math.round((endIndex - startIndex) / 2 - 0.5);
    let isMatching;
    //
    while (endIndex - startIndex > 2) {
        isMatching = arrayBad[middleIndex] === arrayGood[middleIndex];
        //
        if (isMatching) {
            startIndex = middleIndex;
            middleIndex = startIndex + Math.round((endIndex - startIndex) / 2 - 0.5);
        }
        //
        if (!isMatching) {
            endIndex = middleIndex;
            middleIndex = startIndex + Math.round((endIndex - startIndex) / 2 - 0.5);
        }
    }
    //
    for (let i = startIndex; i <= endIndex; i++) {
        //
        if (arrayBad[i] !== arrayGood[i]) {
            //
            return arrayGood[i];
        }
    }
    //
    return 'No missing number.'
}

let numOfElements = 10000000;   // 10,000,000
let makeItMissing = 9542003;    //  9,542,003
let goodList = makeGoodArray(numOfElements);
let badList = makeBadArray(numOfElements, makeItMissing);

function test1() {
    let timeStart = performance.now();
    let missingNumber = findMissingElementS1(badList);
    let timeEnd = performance.now();
    console.log(`\nSolution:\t1\nMissing number:\t${missingNumber}\nRun time:\t${timeEnd - timeStart} ms`);
    console.log('----------');
}

function test2() {
    let timeStart = performance.now();
    let missingNumber = findMissingElementS2(goodList, badList);
    let timeEnd = performance.now();
    console.log(`\nSolution:\t2\nMissing number:\t${missingNumber}\nRun time:\t${timeEnd - timeStart} ms`);
    console.log('----------');
}

test1();
test2();


/******************/
// adding descriotion

// This time the array is unsorted.
// Task: Find the missing element.

function findMissingInUnsorted(array) {
    let n = array.length + 1;               // +1, because that would be the number of elements if one of them wasn't missing
    let calculatedSum = (n * (n + 1)) / 2;  // formula to calculate the sum of the first n natural numbers starting with 1
    let countedSum = 0;                     // sum for the loop
    for (let i of array) {
        countedSum += i;
    }
    // the missing number will be the differenc of the 'calculatedSum' and the 'countedSum'
    return calculatedSum - countedSum;
}

let unsortedArray = [4, 7, 9, 1, 5, 3, 10, 2, 8];

console.log(findMissingInUnsorted(unsortedArray));

// This time the array is unsorted and there are multiple missing elements.
// Task: Find all the missing elements.

let multipleMissing = [4, 19, 11, 18, 16, 13, 17, 15, 1, 12, 20, 5, 10, 2, 14, 8]; // 3, 6, 7, 9

function findMultipleMissing(array) {
    let sortedArray = array.sort((a, b) => a - b);
    let missingNumbers = [];
    for (let i = 0; i < array.length - 2; i++) {
        let currentNumber = sortedArray[i];
        let nextNumber = sortedArray[i + 1];
        if (nextNumber - currentNumber !== 1) {
            for (let j = 1; j < (nextNumber - currentNumber); j++) {
                missingNumbers.push(currentNumber + j);
            }
        }
    }
    return {
        first: sortedArray[0],
        missingNumbers, last:
            sortedArray[sortedArray.length - 1]
    };
}

console.log(findMultipleMissing(multipleMissing));

