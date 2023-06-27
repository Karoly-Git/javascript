// Given an array of numbers.
// Task: Find the min and max value and return the values and the positions.

// The given array.
let array = [12, 4, -5, 27, 39, 11, 63, 42, -9, 21, 17, 49];

const findMinMax = (list) => {
    // Let's declare 'min' and set 'min.value' and 'min.index' to 0.
    let min = { value: 0, index: 0 };

    // Let's iterate through the list and compare if any of the elements has greater value than 'min.value'. 
    for (let i in list) {
        // If yes, then overwrite the 'min.value' to the current value and the 'min.index' to the current index.
        if (list[i] < min.value) {
            min.value = list[i];
            min.index = i;
        }
    }

    // Let's declare 'max' and set 'max.value' and 'max.index' to 0.
    let max = { value: 0, index: 0 };

    // Let's iterate through the list and compare if any of the elements has smaller value than 'max.value'. 
    for (let j in list) {
        // If yes, then overwrite the 'max.value' to the current value and the 'max.index' to the current index.
        if (list[j] > max.value) {
            max.value = list[j];
            max.index = j;
        }
    }
    // Return the object that has all required data.
    return { min, max };
}

// Log the result.
console.log(findMinMax(array));
