/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
        
        1
      1   1
    1   2   1
  1   3   3   1
1   4   6   4   1

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]

Constraints:
1 <= numRows <= 30
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(num) {
    function creatNewArray(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            newArr.push(arr[i] + arr[i + 1]);
        }
        newArr.unshift(1);
        newArr.push(1);
        return newArr;
    }

    let count = 0;
    let element = [1];
    let pascalList = [element];

    if (num === 1) return [element];

    while (count < num - 1) {
        element = creatNewArray([...element]);
        pascalList.push(element);
        count++;
    }

    return pascalList;
}

//pascalsTriangle(3).forEach((e) => console.log(e));
console.log(generate(1));
