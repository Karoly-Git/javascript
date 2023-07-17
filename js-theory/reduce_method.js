/* In JavaScript, the reduce() method is used to iterate over an 
array and accumulate the values into a single result. It applies 
a callback function to each element of the array and returns a single value.
*/

const numbers = [1, 2, 3, 4, 5];

// Summing all numbers using reduce
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum); // Output: 15

// Calculating the product of all numbers using reduce
const product = numbers.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
});

console.log(product); // Output: 120

