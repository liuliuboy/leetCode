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
  // left 与 right 两数可能相等，所以用 <=
  while (left <= right) {
    let index = Math.floor((right - left) / 2 + left)
    if (nums[index] === target) {
      return index;
    } else if (nums[index] > target) {
      // 右闭 一定不包含当前值
      right = index - 1;
    } else if (nums[index] < target) {
      // 左闭 一定不包含当前值
      left = index + 1;
    }
  }
  return -1
};
// @lc code=end

