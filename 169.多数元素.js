/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let fls = nums.length / 2;
    let obj = {};
    for (let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
        if (obj[num] > fls) {
            return num;
        }
    }
};

// @lc code=end

