/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length
    if (len <= 2) {
        return len;
    }
    let fast = 2;
    let slow = 2;
    while (fast < len) {
        console.log(nums[slow - 2], '=====', nums[fast]);
        if (nums[slow - 2] !== nums[fast]) {
            nums[slow] = nums[fast]
            ++slow;
        }
        ++fast;
    }
    return slow;
};


// @lc code=end

