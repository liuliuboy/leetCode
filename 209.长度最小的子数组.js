/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let start = end = 0;
  let len = nums.length;
  let sum = 0;
  let ans = Infinity;
  while (end < len) {
    sum = nums[start] + nums[end];
    if (sum >= target) {
      
      start++;
    }
    end++;
  }
  
};
// @lc code=end

