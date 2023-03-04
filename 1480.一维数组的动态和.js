/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  if (nums && nums.length === 0) {
    return []
  }
  let sumArr = [];
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num += nums[i]
    sumArr.push(num)
  }
  return sumArr;
};
// @lc code=end

