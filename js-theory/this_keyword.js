/*
The this keyword in JavaScript refers to the object that the function is
executing in. The value of this is determined by how a function is invoked,
and it may vary depending on the context.
*/

//  There are four common ways to set the value of this:

//  1.  Global context:
/* When this is used in the global scope (outside of any function),
it refers to the global object, which is typically window in a browser or global in Node.js. */

//  2.  Function context:
/* When a function is invoked as a method of an object, this is set to the object itself. */
//  For example:

let obj = {
    name: 'Karoly',
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    },
};

obj.greet(); // Output: Hello, Karoly!

//  3.  Explicit binding:
/*You can explicitly set the value of this by using functions like call(), apply(), or bind().*/
// For instance:

function greet() {
    console.log(`Hello, ${this.name}!`);
}

const person = { name: 'Alice' };

greet.call(person); // Output: Hello, Alice!

//  4.  Arrow functions:
/* Arrow functions have a lexical scope for this, which means that this will 
be inherited from the parent scope. In other words, this inside an arrow 
function will always be the same as this outside of the arrow function. */

const obj2 = {
    name: 'Bob',
    greet: () => {
        console.log(`Hello, ${this.name}!`);
    }
};

obj2.greet(); // Output: Hello, undefined! (this.name is undefined as `this` refers to global scope)

