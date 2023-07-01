// Given an array of numbers.
// Numbers: -14, 10, 7, -6, -16, 18, -19, 15, -1, -9, 12, -8, 4, 2, -3, 9, -17, 5, 0, -20
// Task: Find the smallest and the greatest values of the array and return their values and positions.

// The given array.
let array = [-14, 10, 7, -6, -16, 18, -19, 15, -1, -9, 12, -8, 4, 2, -3, 9, -17, 5, 0, -20];


// ********************
// Solution-1:
// for... loop
const findMinMaxS1 = (list) => {
    // Declare 'min' and 'max' objects.
    // Set both, the smallest and the greatest values to the value of the first element to.
    // Set index 0. 
    let min = { value: list[0], index: 0 };
    let max = { value: list[0], index: 0 };

    // Iterate through the list and compare if any of the elements has smaller value than 'min.value' or greater than 'max.value'. 
    for (let i = 0; i < list.length; i++) {
        // If any of the elements has smaller value than 'min.value', then overwrite the 'min.value' to the current value and the 'min.index' to the current index.
        if (list[i] < min.value) {
            min.value = list[i];
            min.index = i;
        }
        // If any of the elements has greater value than 'max.value', then overwrite the 'max.value' to the current value and the 'max.index' to the current index.
        if (list[i] > max.value) {
            max.value = list[i];
            max.index = i;
        }
    }
    // Return the object that has all required data.
    return { min, max };
}

// Log the results.
console.log('S1, for...\n', findMinMaxS1(array));


// ********************
// Solution-2:
// for...in loop
const findMinMaxS2 = (list) => {
    /*
    When you use for...in loop, it iterates over the indices of the array as strings,
    not as numerical indices. Therefore, the i variable represents the index of the array as a string, not a number.
    If there is a need to store it as a number, then it has to be converted to a number.
    */
    let min = { value: list[0], index: 0 };
    let max = { value: list[0], index: 0 };

    for (let i in list) {
        if (list[i] < min.value) {
            min.value = list[i];
            min.index = Number(i);
        }
        if (list[i] > max.value) {
            max.value = list[i];
            max.index = Number(i);
        }
    }
    return { min, max };
}

console.log('S2, for...in\n', findMinMaxS2(array));


// ********************
// Solution-3
// forEach()
const findMinMaxS3 = (list) => {
    let min = { value: list[0], index: 0 };
    let max = { value: list[0], index: 0 };

    list.forEach((element, index) => {
        if (element < min.value) {
            min.value = element;
            min.index = index;
        }
        if (element > max.value) {
            max.value = element;
            max.index = index;
        }
    });
    return { min, max };
}

console.log('S3, forEach()\n', findMinMaxS3(array));
