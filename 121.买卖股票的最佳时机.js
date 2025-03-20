/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices || prices.length === 0) return 0;
  const len = prices.length;
  let price = new Array(len).fill(0);
  let min = prices[0];
  for (let i = 1; i < len; i++) {
    price[i] = Math.max(price[i - 1], prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  return price[len - 1];
};

// @lc code=end

