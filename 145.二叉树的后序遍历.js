/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 * 后续递归 先左
 */
// var postorderTraversal = function(root) {
//   let arr = [];
//   let traversal = (node) => {
//     if (node !== null) {
//       traversal(node.left);
//       traversal(node.right);
//       arr.push(node.val);
//     }
//   }
//   traversal(root);
//   return arr;
// };

/**
 * 迭代
 * 顺序 左 右 根
 */
var postorderTraversal = function(root) {
  let res = [];
  if (root === null) {
    return res
  }
  let stk = [];
  let prve = null;
  while (root || stk.length) {
    // 先存储左树
    while (root) {
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    if (root.right === null || root.right === prve) {
      res.push(root.val);
      prve = root;
      root = null;
    } else {
      stk.push(root)
      root = root.right;
    }
  }
  return res;
}
// @lc code=end

