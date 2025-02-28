/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let result = [];
  let path = [];
  function backtracing (startIndex) {
    if (path.length > 1) {
      result.push(path.slice());
    }
    let uest = [];
    for (let i = startIndex; i < nums.length; i++) {
      if ((path.length > 0 && nums[i] < path[path.length - 1]) || uest[nums[i] + 100]) {
        continue;
      }
      uest[nums[i] + 100] = true;
      path.push(nums[i]);
      backtracing(i + 1);
      path.pop();
    }
  }
  backtracing(0);
  return result;
};
// @lc code=end

