/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 * 递归
 */
// var maxDepth = function(root) {
//   if (root === null) {
//     return 0;
//   }
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };

/**
 * 迭代
 * 广度优先遍历
 */
var maxDepth = function(root) {
  if (root === null) {
    return 0
  }
  let deep = 0;
  let stk = [root];
  while(stk.length) {
    let len = stk.length;
    for (let i = 0; i < len; i++) {
      let node = stk.shift();
      if (node.left !== null) {
        stk.push(node.left);
      }
      if (node.right !== null) {
        stk.push(node.right);
      }
    }
    deep++;
  }
  return deep;
}
// @lc code=end

