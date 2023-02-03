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
  let ret = []; // 结果
  let stk = [root]; // 队列

  let isOrderLeft = true;
  while (stk.length) {
    let len = stk.length; // 队列
    let leveList = [];
    // 循环队列
    for (let i = 0; i < len; i++) {
      let node = stk.shift(); // 先进先出
      if (isOrderLeft) {
        leveList.push(node.val);
      } else {
        leveList.unshift(node.val);
      }
      
      // 判断当前节点是否有左右子节点，有的话放入队列中
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

