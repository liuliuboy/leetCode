/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 动态规划
 */
var climbStairs = function(n) {
  if (n <= 2) {
    return n
  }
  let arr = [];
  arr[1] = 1;
  arr[2] = 2;
  let sum = 0;
  for (let i = 2; i < n; i++) {
    sum = arr[1] + arr[2];
    arr[1] = arr[2];
    arr[2] = sum;
  }
  return sum;
};
// @lc code=end

