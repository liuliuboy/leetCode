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
  let numArr = []; // 数字栈
  let codeArr = []; // 字符串栈
  let num = 0; // 倍数
  let ret = ''; // 拼接的字符串
  for (const str of s) {
    if (!isNaN(str)) { // 判断是否是数字
      num = num * 10 + Number(str);
    } else if (str === "[") {
      codeArr.push(ret);
      ret = '';
      numArr.push(num);
      num = 0;
    } else if (str === "]") {
      let repeatNum = numArr.pop();
      ret = codeArr.pop() + ret.repeat(repeatNum);
    } else {
      ret += str;
    }
  }
  return ret;
};
// @lc code=end

