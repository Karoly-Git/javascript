/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
    let prefix = '';
    let charIndex = 0;
    let maxIndex = strs[0].length - 1;

    while (charIndex <= maxIndex) {
        let char = strs[0][charIndex];
        for (let i = 1; i < strs.length; i++) {
            console.log(strs[i][charIndex]);
            if (strs[i][charIndex] !== char) {
                return prefix;
            }
        }
        prefix += char;
        charIndex++;
    }

    return prefix;
};

console.log('---------');
console.log(longestCommonPrefix(["flower", "flow", "flight"]));