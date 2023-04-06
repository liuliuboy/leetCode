/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let buils = 0;
  let cutS = new Array(10).fill(0);
  let cutG = new Array(10).fill(0);
  for (let i = 0; i < secret.length; ++i) {
    if (secret[i] === guess[i]) {
      ++buils;
    } else {
      ++cutS[secret[i].charCodeAt() - '0'.charCodeAt()];
      ++cutG[guess[i].charCodeAt() - '0'.charCodeAt()];
    }
  }
  let cuws = 0;
  for (let k = 0; k < 10; ++k) {
    cuws += Math.min(cutS[k], cutG[k]);
  }
  return '' + buils + 'A' + cuws + 'B';
};
// @lc code=end

