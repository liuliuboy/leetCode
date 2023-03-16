/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 动态规划
 */
var fib = function(n) {
  if (n <= 1) {
    return n
  }
  let dpArr = [0, 1]; // 斐波那契数列 0 1 开始
  let sum = 2;
  for (let i = 2; i <= n; i++) {
    sum = dpArr[0] + dpArr[1]; // n = (n - 1) + (n - 2)
    dpArr[0] = dpArr[1];
    dpArr[1] = sum;
  }
  return sum;
};
// @lc code=end

