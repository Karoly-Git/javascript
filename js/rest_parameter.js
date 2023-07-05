/*
In JavaScript, a rest parameter allows a function to accept an indefinite number of 
arguments as an array. It is denoted by using three dots (...) followed by the name 
of the parameter. 

1.  Syntax:
    The rest parameter syntax looks like this:
   
    function functionName(...restParameter) {
        // code to be executed
    }
   
2.  Usage:
    Rest parameters are useful when you want to pass a variable 
    number of arguments to a function. It replaces the need for using 
    the arguments object.

3.  Arguments as an array:
    The rest parameter allows you to capture all arguments passed into 
    a function, and it consolidates them into an array. You can 
    think of it as a way to represent the remaining arguments.

4.  Length property: 
    Rest parameter syntax with three dots (...) creates an array, so you 
    can use the array length property (restParameter.length) to determine 
    the number of arguments passed.

5.  Arguments before the rest parameter: 
    You can still include regular function parameters before the rest 
    parameter. These parameters will be matched first, and any remaining 
    arguments will be collected into the rest parameter array.

6.  No named arguments: 
    Rest parameters only collect the arguments that have no corresponding 
    named parameter. It means whenever you declare a named parameter before 
    the rest parameter, any corresponding arguments will be assigned to 
    those named parameters, and the rest parameter will only include the 
    remaining arguments.

7.  Array-like objects: 
    Rest parameters can also be used to collect elements from array-like 
    objects (objects with a length property and indexed elements) like 
    arguments or NodeList.

8.  Default parameter: 
    You can assign a default value to a rest parameter, just like regular 
    function parameters.

9.  No duplicate rest parameters: 
    You can only have one rest parameter per function, and it should always 
    be the last parameter.
*/

//  Examples:

function sumWithFor(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

console.log('SumFor:', sumWithFor(1, 2, 3, 4)); // Output: SumFor: 10

function sumWithReduce(...numbers) {
    let total = numbers.reduce((a, b) => a + b);
    return total;
}

console.log('SumReduce:', sumWithReduce(1, 2, 3, 4)); // Output: SumReduce: 10

function calculateAverage(...numbers) {
    return numbers.reduce((a, b) => a + b) / numbers.length;
}

console.log('Average:', calculateAverage(1, 2, 3, 4)); // Output: Average: 2.5

/*
    In summary, rest parameters in JavaScript allow you to gather multiple 
    function arguments into a single array, making it convenient to handle 
    a variable number of arguments.
*/

