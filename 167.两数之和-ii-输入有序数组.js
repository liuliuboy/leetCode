/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length;
  while (left < right) {
    let num = numbers[left] + numbers[right - 1]
    if (num === target) {
      return [left + 1, right]
    } else if (num < target) {
      left++
    } else if (num > target){
      right--
    }
  }
};
// @lc code=end

