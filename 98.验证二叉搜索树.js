/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (root === null) {
    return false;
  }

  const isCheck = (node) => {
    if (node === null) {
      return false;
    }
    if (node.left === null && node.right === null) {
      return true;
    }
    if (node.left === null || node.right === null) {
      return false;
    }
    if (node.left.val < node.val && node.right.val > node.val) {
      return true;
    }
    return false;
    isCheck(node.left);
    isCheck(node.right);
  };
  return isCheck(root)
};
// @lc code=end

