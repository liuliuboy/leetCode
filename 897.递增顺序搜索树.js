/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序搜索树
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
 */
var increasingBST = function(root) {
  if (root === null) {
    return null;
  }
  let tree = new TreeNode();
  let cur = tree;
  let stk = [];
  while (stk.length || root !== null) {
    while (root !== null) {
      stk.push(root);
      root = root.left;
    }
    let node = stk.pop();
    cur.right = new TreeNode(node.val);
    cur = cur.right;
    root = node.right;
  }
  return tree.right;
};
// @lc code=end

