/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const len = nums.length;
    const result = new Array(len);
    result[0] = 1;
    for (let i = 1; i < len; i++) {
        result[i] = nums[i - 1] * result[i - 1];
    }
    
    let R = 1;
    for (let i = len - 1; i >=0; i--) {
        result[i] = result[i] * R;
        R *= nums[i];
    }
    return result;
}
console.log(productExceptSelf([1,2,3,4]));
// @lc code=end

