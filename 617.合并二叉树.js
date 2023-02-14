/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  if (root1 === null && root2 === null) {
    return null;
  }
  if (root1 === null && root2 !== null) {
    return root2;
  }
  if (root1 !== null && root2 === null) {
    return root1;
  }
  let stk = [root1, root2];
  while (stk.length) {
    let node1 = stk.shift();
    let node2 = stk.shift();
    node1.val += node2.val;
    if (node1.left !== null && node2.left !== null) {
      stk.push(node1.left);
      stk.push(node2.left);
    }
    if (node1.right !== null && node2.right !== null) {
      stk.push(node1.right);
      stk.push(node2.right);
    }
    if (node1.left === null && node2.left !== null) {
      node1.left = node2.left;
    }
    if (node1.right === null && node2.right !== null) {
      node1.right = node2.right;
    }
  }
  return root1;
};
// @lc code=end

