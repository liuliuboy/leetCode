/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const sLen = s.length; 
  const pLen = p.length;
  if (sLen < pLen) {
    return [];
  }
  let ret = [];
  let sL = new Array(26).fill(0);
  let pL = new Array(26).fill(0);
  let base = 'a'.charCodeAt();
  for (let i = 0; i < pLen; ++i) {
    ++sL[s[i].charCodeAt() - base];
    ++pL[p[i].charCodeAt() - base];
  }
  if (sL.toString() === pL.toString()) {
    ret.push(0);
  }
  for (let k = 0; k < sLen - pLen; ++k) {
    --sL[s[k].charCodeAt() - base];
    ++sL[s[k + pLen].charCodeAt() - base];
    if (sL.toString() === pL.toString()) {
      ret.push(k + 1);
    }
  }
  return ret;
};
findAnagrams('cbaebabacd', 'abc');
// @lc code=end

