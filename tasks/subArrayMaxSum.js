/*
Given an array of integers, find the maximum possible sum you can get 
by adding together some subset of the integers. The subset must 
consist of consecutive elements from the original array and include 
at least two elements.
*/

//let array = [1, -2, 3, -4, -5, -6];
let array = [-9, 2, -5, 8, -4, 0, 6, -2, 10, -8, 3, -7, 1, 5, -3, 9, 7, -10, 4, -1];

function findMaxValueOfSubArray(minLength, array) {
    // Initialization of a variable to hold the maximum subarray and its sum value
    let subArrayMax = {
        value: 0,
        numbers: []
    };
    // Variables for calculation inside loops
    let sumCount;
    let subNums = [];

    // Outer loop: iterate through different subarray lengths starting from minLength
    for (let subLength = minLength; subLength <= array.length; subLength++) {
        // Inner loop: iterate through the array to find subarrays of current length
        for (let j = 0; j < array.length - subLength + 1; j++) {
            // Calculate the sum of elements of the current subarray and store them
            sumCount = 0;
            subNums = [];
            for (let k = j; k < j + subLength; k++) {
                sumCount += array[k];
                subNums.push(array[k]);
            }
            // Check if the current subarray sum is greater than the previously stored maximum
            if (subArrayMax.value < sumCount) {
                subArrayMax.value = sumCount;
                subArrayMax.numbers = subNums;
            }
        }
    }
    // Return the maximum subarray and its sum value
    return subArrayMax;
}

console.log(findMaxValueOfSubArray(2, array));

