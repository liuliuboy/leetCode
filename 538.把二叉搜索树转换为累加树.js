/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * 深度优先，倒序中序遍历
 */
var convertBST = function(root) {
  let stk = [];
  let num = 0;
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

