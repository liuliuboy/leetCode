/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let numStk = [];
  let strStk = [];
  let num = 0;
  let ret = '';
  for (const str of s) {
    if (!isNaN(str)) {
      num = num * 10 + Number(str);
    } else if (str === '[') {
      strStk.push(ret);
      ret = '';
      numStk.push(num);
      num = 0;
    } else if (str === ']') {
      let repeatNum = numStk.pop();
      ret = strStk.pop() + ret.repeat(repeatNum);
    } else {
      ret += str;
    }
  }
  return ret;
};

// @lc code=end

