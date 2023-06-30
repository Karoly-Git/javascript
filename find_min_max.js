// Given an array of numbers.
// Task: Find the min and max value and return the values and the positions.

// The given array.
let array = [12, 4, -5, 27, 39, 11, 63, 42, -9, 21, 17, 49];

// Solution-1:
// For Loop
const findMinMaxFor = (list) => {
    // Let's declare 'min' and 'max' objects, and set all their values to 0.
    let min = { value: 0, index: 0 };
    let max = { value: 0, index: 0 };

    // Let's iterate through the list and compare if any of the elements has smaller value than 'min.value' or greater than 'max.value'. 
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

// Solution-2:
// For In Loop
const findMinMaxForIn = (list) => {
    /*
     When you use for...in loop, it iterates over the indices of the array as strings,
     not as numerical indices. Therefore, the i variable represents the index of the array as a string, not a number.
     If there is a need to store it as a number, then it has to be converted to a number.
    */
    let min = { value: 0, index: 0 };
    let max = { value: 0, index: 0 };

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

// Log the results.
console.log('For Loop:', findMinMaxFor(array));
console.log('For In Loop:', findMinMaxForIn(array));
