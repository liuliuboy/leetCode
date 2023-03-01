/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let ret = [];
  if (root === null) {
    return ret;
  }
  let stk = [root]; // 广度优先遍历， 队列存储
  while (stk.length) {
    let len = stk.length;
    let arr = [];
    while (len) {
      let node = stk.shift(); // 先进先出
      arr.push(node.val)
      node.left && stk.push(node.left);
      node.right && stk.push(node.right);
      len--;
    }
    ret.unshift(arr); // 头部添加值
  }
  return ret;
};
// @lc code=end

