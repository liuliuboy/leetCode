/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * 倒叙递归
 * @param {*} root 
 * @returns 
 */
var diameterOfBinaryTree = function(root) {
  let len = 0;
  const dfs = (root) => {
    if (root === null) {
      return 0;
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    // 更新最大长度 len 
    len = Math.max(len, left + right);
    // 求左右两分支最大长度
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return len;
};
// @lc code=end

