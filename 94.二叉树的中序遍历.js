/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * 递归
 */
// var inorderTraversal = function(root) {
//   let arr = [];
//   let traversal = (node) => {
//     if (node !== null) {
//       traversal(node.left);
//       arr.push(node.val);
//       traversal(node.right);
//     }
//   }
//   traversal(root);
//   return arr;
// };

/**
 * 迭代
 * 模拟栈
 */
var inorderTraversal = function (root) {
  let treeArr = [];
  let arr = [];
  while (root || treeArr.length) {
    // 先把左边放入栈中
    while (root) {
      treeArr.push(root);
      root = root.left;
    }
    let node = treeArr.pop();
    arr.push(node.val);
    root = node.right;
  }
  return arr;
}
// @lc code=end

