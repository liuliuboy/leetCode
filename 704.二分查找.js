/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 左闭右闭 包含左右两值
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while(left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    if(nums[mid] === target) {
      return mid;
    }
    if(nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
// @lc code=end

