/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * 广度搜索
 * 队列
 */
var rightSideView = function(root) {
  let ret = [];
  if (root === null) {
    return ret;
  }
  let stk = [root];
  while (stk.length) {
    let len = stk.length;
    for (let i = 0; i < len; i++) {
      let node = stk.shift();
      if (node.left !== null) {
        stk.push(node.left);
      }
      if (node.right !== null) {
        stk.push(node.right);
      }
      if (i == len - 1) {
        ret.push(node.val);
      }
    }
  }
  return ret;
};
// @lc code=end

