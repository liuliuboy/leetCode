/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 * 返回节点解构赋值
 */
var invertTree = function(root) {
  let traversal = (node) => {
    if (node === null) {
      return null;
    } else {
      // 节点解构赋值
      [node.left, node.right] = [traversal(node.right), traversal(node.left)];
      // 返回当前节点
      return node;
    }
  }
  return traversal(root);
};
// @lc code=end

