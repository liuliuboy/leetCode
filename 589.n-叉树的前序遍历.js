/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  let ret = [];
  if (root === null) {
      return ret;
  }
  let stk = [root];
  while (stk.length) {
    let node = stk.shift();
    ret.push(node.val);
    let i = node.children ? node.children.length : 0;
    for (i;  i > 0; i--) {
      stk.push(node.children[i]);
    }
  }
  return ret;
};
// @lc code=end

