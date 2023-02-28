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
  if (root === null) {
    return [];
  }
  let stk = [root];
  let ret = [];
  while (stk.length) {
    // 栈
    let node = stk.pop();
    ret.push(node.val);
    // 倒序 后进先出 原则
    let i = node.children ? node.children.length - 1 : 0;
    for (i; i >= 0; i--) {
      stk.push(node.children[i]);
    }
  }
  return ret;
};
// @lc code=end

