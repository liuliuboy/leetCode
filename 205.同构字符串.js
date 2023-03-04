/*
 * @lc app=lee[]]code.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let s1 = {};
  let t1 = {};
  let len = s.length;
  for (let i = 0; i < len; i++) {
    const x = s[i], y = t[i];
    if (s1[x] && s1[x] !== y || t1[y] && t1[y] !== x) {
      return false;
    }
    // 映射对方的值
    s1[x] = y;
    t1[y] = x;
  }
  return true;
};
// @lc code=end

