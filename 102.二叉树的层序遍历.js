/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * 迭代 BFS 广度优先搜索
 */
var levelOrder = function(root) {
  if (root === null) {
    return [];
  }
  let ret = [];
  let stk = [root];
  while (stk.length !== 0) {
    let len = stk.length;
    ret.push([]);
    for (let i = 0; i < len; i++) {
      const node = stk.shift();
      ret[ret.length - 1].push(node.val);
      node.left && stk.push(node.left);
      node.right && stk.push(node.right);
    }
  }
  return ret;
};
// @lc code=end

