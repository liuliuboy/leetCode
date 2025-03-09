/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let letf = 0;
    let right = nums.length;
    while (letf < right) {
        if (nums[letf] === val) {
            nums[letf] = nums[right - 1];
            right--;
        } else {
            letf++;
        }
    }
    return right;
};
// @lc code=end

