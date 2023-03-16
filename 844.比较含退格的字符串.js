/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let sC = [];
  let tC = [];
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    if (str !== "#") {
      sC.push(str);
    } else {
      sC.pop();
    }
  }

  for (let i = 0; i < t.length; i++) {
    let str = t[i];
    if (str !== "#") {
      tC.push(str);
    } else {
      tC.pop()
    }
  }
  if (sC.join() === tC.join()) {
    return true;
  }
  return false;
};
// @lc cde=end

