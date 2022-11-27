/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  let len:number = nums.length;
  let fast:number = 0, slow:number = fast, sum = 0;
  let result:number = len + 1;
  while (fast < len) {
    sum+=nums[fast++];
    while (sum >= target) {
      let subLen:number = fast - slow;
      result = (result < subLen) ? result : subLen;
      sum -= nums[slow++];
    }
  }
  return result > len ? 0 : result;
}
// @lc code=end

