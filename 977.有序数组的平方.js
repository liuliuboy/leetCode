/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * 双指针
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let n = nums.length;
  let i = 0, k = n - 1, j = n - 1;
  let res = new Array(n).fill(0);
  while (i <= j) {
    let left = nums[i] * nums[i];
    let right = nums[k] * nums[k];
    if (left < right) {
      res[j--] = right;
      k--;
    } else {
      res[j--] = left;
      i++;
    }
  }
  return res;
};
// @lc code=end

