/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

Constraints:
1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let newStr = s;
    let lastIndex = newStr.length - 1;
    let lastChar = newStr[lastIndex];
    if (lastChar === ' ') {
        while (lastChar === ' ') {
            newStr = newStr.slice(0, lastIndex);
            lastIndex = newStr.length - 1;
            lastChar = newStr[lastIndex];
        }
    }
    let split = newStr.split(' ');
    let lastWord = split.at(-1);
    return lastWord.length;
};

//str = 'Hello World';
//str = 'luffy is still joyboy';
str = '   fly me   to   the moon  ';

console.log(lengthOfLastWord(str));