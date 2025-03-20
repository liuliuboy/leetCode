/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let step = 0;
    let end = 0;
    let maxPosition = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i]);
        if (i === end) {
            step++;
            end = maxPosition;
        }
    }    
    return step;
};
// @lc code=end

