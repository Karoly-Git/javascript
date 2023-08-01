/*
Given an array of integers, find the maximum possible sum you can get 
by adding together some subset of the integers. The subset must 
consist of consecutive elements from the original array and include 
at least two elements.
*/


// Solution-1, for... loop:
function findMaxValueOfSubArray(minLength, array) {
    // Initialization of a variable to hold the maximum subarray and its sum value
    let subArrayMax = {
        value: 0,
        subArray: []
    };
    // Variables for calculation inside loops
    let subCount;
    let subNums = [];

    // Outer loop: iterate through different subarray lengths starting from minLength
    for (let subLength = minLength; subLength <= array.length; subLength++) {
        // Inner loop: iterate through the array to find subarrays of current length
        for (let j = 0; j < array.length - subLength + 1; j++) {
            // Calculate the sum of elements of the current subarray and store them
            subCount = 0;
            subNums = [];
            for (let k = j; k < j + subLength; k++) {
                subCount += array[k];
                subNums.push(array[k]);
            }
            // Check if the current subarray sum is greater than the previously stored maximum
            if (subArrayMax.value < subCount) {
                subArrayMax.value = subCount;
                subArrayMax.subArray = subNums;
            }
        }
    }
    // Return the maximum subarray and its sum value
    return subArrayMax;
}


// Solution-2, Kadane's algorithm:
function kadanesAlgorithm(array) {
    let maxEndingHere = array[0];
    let maxSoFar = array[0];
    let start = 0; // Start index of the sub-array for the maximum sum
    let tempStart = 0; // Temporary start index for tracking sub-array

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxEndingHere + array[i]) {
            maxEndingHere = array[i];
            tempStart = i;
        } else {
            maxEndingHere = maxEndingHere + array[i];
        }

        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = tempStart;
        }
    }

    // Extract the sub-array using the start index and the length of the sub-array
    const subArray = array.slice(start, start + 1);
    for (let i = start + 1; i < array.length; i++) {
        if (subArray.reduce((acc, val) => acc + val, 0) === maxSoFar) {
            break;
        }
        subArray.push(array[i]);
    }

    return {
        value: maxSoFar,
        subArray: subArray,
    };
}


let array = [-9, 2, -5, 8, -4, 0, 6, -2, 10, -8, 3, -7, 1, 5, -3, 9, 7, -10, 4, -1];

console.log('\nFor... loop result:');
console.log(findMaxValueOfSubArray(2, array));

console.log("\nKadane's result:");
console.log(kadanesAlgorithm(array));

