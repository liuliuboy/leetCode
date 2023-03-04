/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let len = s.length;
  let tLen = t.length;
  let tStr = t;
  for (let i = 0; i < len; i++) {
    const str = s[i];
    const index = tStr.indexOf(str);
    if (index < 0) {
      return false;
    }
    tStr = tStr.slice(index + 1, tLen);
  }
  return true;
};
// @lc code=end

