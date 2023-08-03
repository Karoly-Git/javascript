// Calculate n factorial
function factorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


// Calculate the sum of the first n natural numbers
function sum(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return n + sum(n - 1);
    }
}


// Calculate the sum of array elements
function arraySum(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + arraySum(arr.slice(1))
    }
}

