/*
In JavaScript, the concat() method is used to merge two or more arrays together, 
creating a new array that contains the elements of the original arrays. 
It does not modify the original arrays; instead, it returns a new array with the 
concatenated elements.

The syntax for the concat() method is as follows:

const newArray = array1.concat(array2, array3, ..., arrayN);

Here, array1 is the initial array, and array2, array3, ..., arrayN 
are the arrays you want to concatenate. You can pass multiple arrays 
separated by commas, and they will be merged in the order they appear 
in the arguments list.
*/

// Example:

const fruits1 = ['apple', 'banana', 'kiwi'];
const fruits2 = ['orange', 'grape'];
const allFruits = fruits1.concat(fruits2);

console.log(allFruits); // Output: ['apple', 'banana', 'kiwi', 'orange', 'grape']

/*
The concat() method is useful when you need to combine arrays without modifying 
the original arrays. If you want to add elements to an existing array in place, 
you can use the push() method or the spread operator (...) to achieve that.
*/
