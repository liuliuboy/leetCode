/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  // let arr = citations.sort((a, b) => a - b);
  // let h = 0;
  // let len = arr.length - 1;
  // while (len >= 0 && arr[len] > h) {
  //   h++;
  //   len--;
  // }
  // return h;

  let n = citations.length;
  let tot = 0;
  const count = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    if (citations[i] >= n) {
      count[n]++;
    } else {
      count[citations[i]]++;
    }
  }

  for (let i = n; i >= 0; i--) {
    tot += count[i];
    if (tot >= i) {
      return i;
    }
  }
  return 0;
};
console.log(hIndex([0, 1, 3, 5, 6])); // 3

// @lc code=end

