newNode/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (root === null) {
    return null;
  }
  // let stk = [root];
  // while (stk.length) {
  //   let node = stk.pop();
  //   if (node.val === val) {
  //     return node;
  //   }
  //   node.left && stk.push(node.left);
  //   node.right && stk.push(node.right);
  // }

  while (root !== null) {
    if (root.val === val) {
      return root;
    }
    root = root.val > val ? root.left : root.right;
  }
  return null
};
// @lc code=end

