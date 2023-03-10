/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 * 左闭右开 
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1; // 左闭
        let right = n; // 右开
        // left 与 right 两数不可能相等所以用 < 
        while (left < right) {
            let mid = Math.floor((right - left) / 2 + left);
            if (isBadVersion(mid)) {
                // 不包含 right 所以直接赋值到 right 上
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};
// @lc code=end

