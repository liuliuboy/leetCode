/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  let arr = [];
  let traversal = (node) => {
    if (node !== null) {
      node.children.forEach(item => {
        traversal(item);
      });
      arr.push(node.val);
    }
  }
  traversal(root);
  return arr;
};
// @lc code=end

