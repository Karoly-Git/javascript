/*
Given a non-empty array of integers nums, every element appears twice except for one.
Find that single one. You must implement a solution with a linear runtime complexity 
and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

Constraints:
1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let sorted = nums.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i += 2) {
        if (sorted[i] !== sorted[i + 1]) return sorted[i];
    }
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
console.log(singleNumber([5, 4, 1, 7, 6, 1, 5, 6, 4]));

