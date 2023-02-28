/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let ret = [];
  const travese = (node, arr) => {
    if (node === null) {
      return null;
    }
    if (node.left === null && node.right === null) {
      arr.push(node.val)
      ret.push(arr.join('->'))
    }
    travese(node.left, arr.concat(node.val))
    travese(node.right, arr.concat(node.val))
  }
  travese(root, []);
  return ret;
};
// @lc code=end

