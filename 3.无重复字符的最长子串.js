/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 使用快慢指针，定出比较范围。
 */
var lengthOfLongestSubstring = function(str) {
  if (str.length <= 1) {return str.length}
  let left = 0;
  let right = 1;
  let max = 0;
  let temp
  while (right < str.length) {
    temp = str.slice(left, right);
    // 比较窗口内是否有重复值
    if (temp.indexOf(str.charAt(right)) > -1) {
      left++;
      continue;
    } else {
      right++;
    }
    // 计算出最常子串
    if (right - left > max) {
      max = right - left;
    }
  }
  return max;
};
// @lc code=end

