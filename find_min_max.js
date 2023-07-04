// Given an array of numbers.
// Numbers: -14, 10, 7, -6, -16, 18, -19, 15, -1, -9, 12, -8, 4, 2, -3, 9, -17, 5, 0, -20
// Task: Find the smallest and the greatest values of the array and return their values and positions.

const array = [-14, 10, 7, -6, -16, 18, -19, 15, -1, -9, 12, -8, 4, 2, -3, 9, -17, 5, 0, -20];


// Solution-1:
// for... loop
const findMinMaxS1 = (list) => {
    // Declare 'min' and 'max' objects.
    let min = { value: list[0], index: 0 };
    let max = { value: list[0], index: 0 };

    // Iterate through the list and compare if any of the elements has smaller value than 'min.value' or greater than 'max.value'. 
    for (let i = 0; i < list.length; i++) {
        // If any there is a smaller value, then overwrite the value and the index.
        if (list[i] < min.value) {
            min.value = list[i];
            min.index = i;
        }
        // If any there is a greater value, then overwrite the value and the index.
        if (list[i] > max.value) {
            max.value = list[i];
            max.index = i;
        }
    }
    return { min, max };
}

console.log('S1, for...\n', findMinMaxS1(array));


// Solution-2:
// for...in loop
const findMinMaxS2 = (list) => {
    /* Note: 
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


// Solution-3
// forEach loop
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


// Solution-4
// forEach and ternary
const findMinMaxS4 = (list) => {
    let min = { value: list[0], index: 0 };
    let max = { value: list[0], index: 0 };

    list.forEach((element, index) => {
        element < min.value ? ((min.value = element), (min.index = index)) : false;
        element > max.value ? ((max.value = element), (max.index = index)) : false;
    });
    return { min, max };
}

console.log('forEach & ternary\n', findMinMaxS4(array));


// Solution-5
// built in methods
const findMinMaxS5 = (list) => {
    let min = { value: list[0], index: 0 };
    let max = { value: list[0], index: 0 };
    min.value = Math.min(...array);
    min.index = array.indexOf(Math.min(...array));
    max.value = Math.max(...array);
    max.index = array.indexOf(Math.max(...array));
    return { min, max };
}

console.log('built in functions\n', findMinMaxS5(array));

/* !!!   TO BE ADDED FROM HERE   !!! */
(function test() {
    let start;
    let end;

    start = performance.now();
    findMinMaxS1(array);
    end = performance.now();
    console.log(end - start);

    start = performance.now();
    findMinMaxS2(array);
    end = performance.now();
    console.log(end - start);

    start = performance.now();
    findMinMaxS3(array);
    end = performance.now();
    console.log(end - start);

    start = performance.now();
    findMinMaxS4(array);
    end = performance.now();
    console.log(end - start);

    start = performance.now();
    findMinMaxS5(array);
    end = performance.now();
    console.log(end - start);

})();

const arraySize = 100000;
const min = -100000;
const max = 100000;

const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const arrayNew = Array.from({ length: arraySize }, () =>
    getRandomInteger(min, max)
);


//console.log(array);
