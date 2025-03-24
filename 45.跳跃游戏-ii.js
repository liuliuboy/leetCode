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
    // let step = 0;
    // let end = 0;
    // let maxPosition = 0;
    // for (let i = 0; i < nums.length - 1; i++) {
    //     maxPosition = Math.max(maxPosition, i + nums[i]);
    //     if (i === end) {
    //         step++;
    //         end = maxPosition;
    //     }
    // }


    // 第二种方式实现 贪心算法
    let len = nums.length - 1;
    let steps = 0;
    while (len > 0) {
        let max = 0;
        let index = 0;
        for (let i = 0; i < len; i++) {
            if (i + nums[i] > max) {
                max = i + nums[i];
                index = i;
                break;
            }
        }
        steps++;
    }
    return step;
};
// @lc code=end

