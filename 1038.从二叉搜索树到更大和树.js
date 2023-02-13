/*
 * @lc app=leetcode.cn id=1038 lang=javascript
 *
 * [1038] 从二叉搜索树到更大和树
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
var bstToGst = function(root) {
  let num = 0;
  let stk = [];
  let node = root;
  while (stk.length !== 0 || node !== null) {
    while (node !== null) {
      stk.push(node);
      node = node.right;
    }
    if (stk.length !== null) {
      node = stk.pop();
      node.val += num;
      num = node.val;
      node = node.left;
    }
  }
  return root;
};
// @lc code=end

