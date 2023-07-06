/* In JavaScript, the reduce() method is used to iterate over an 
array and accumulate the values into a single result. It applies 
a callback function to each element of the array and returns a single value.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = arr.reduce((a, b) => a + b, 100);

console.log(sum);
