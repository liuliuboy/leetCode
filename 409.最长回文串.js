let i = 1; i < len; i++/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let counObj = {};
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (!counObj[s[i]]) {
      counObj[s[i]] = 1;
    } else {
      res += 2;
      delete counObj[s[i]];
    }
  }
  if (s.length > res) {
    res += 1;
  }
  return res;
};
// @lc code=end

