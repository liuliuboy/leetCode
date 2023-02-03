/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * BFS 广度优先遍历
 */
var zigzagLevelOrder = function(root) {
  if (root === null) {
    return []
  }
  let ret = [];
  let stk = [root];

  let isOrderLeft = true;
  while (stk.length) {
    let len = stk.length;
    let leveList = [];
    for (let i = 0; i < len; i++) {
      let node = stk.shift();
      if (isOrderLeft) {
        leveList.push(node.val);
      } else {
        leveList.unshift(node.val);
      }

      if (node.left !== null) {
        stk.push(node.left);
      }
      if (node.right !== null) {
        stk.push(node.right);
      }
    }
    ret.push(leveList);
    isOrderLeft = !isOrderLeft;
  }
  return ret;
};
// @lc code=end

