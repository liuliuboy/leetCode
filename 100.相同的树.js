/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 递归
 */
var isSameTree = function(p, q) {
  // p\q 都同时等于 null，两树相等
  if (p === null && q === null) {
    return true;
  }
  // p\q 有一个等于 null,另一个不等于 null。不相等
  if (p === null || q === null) {
    return false;
  }

  // p/q val 不相等则不相等
  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// @lc code=end

