/*
In JavaScript, the charAt() method is used to retrieve the character
at a specified index position within a string. It returns the character
located at the specified index as a new string. The index position
starts from 0 for the first character.

Here's the syntax of the charAt() method: string.charAt(index)

string: The string from which you want to retrieve the character.
index: The index position of the character you want to retrieve.
*/

// Here's an example that demonstrates the usage of charAt():

const str = "Hello, World!";
const character = str.charAt(7);
console.log(character); // Output: W

/*
In the example above, the string "Hello, World!" is assigned to 
the variable str. By calling str.charAt(7), we retrieve the character 
at index 7, which is the letter "W". The character is then stored in 
the character variable and printed to the console.

It's important to note that if the index provided is out of range 
(less than 0 or greater than or equal to the length of the string), 
an empty string will be returned.
*/
