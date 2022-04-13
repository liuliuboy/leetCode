/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 var isCheck = function(p, q) {
  if (!p && !q) {return true};
  if (!p || !q) {return false};
  return p.val === q.val && isCheck(p.left, q.right) && isCheck(p.right, q.left);
}

var isSymmetric = function(root) {
  return isCheck(root, root);
};
// @lc code=end

