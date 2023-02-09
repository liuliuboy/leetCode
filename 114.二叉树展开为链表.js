/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let list = [];
  if (root === null) {
    return list;
  }
  list = preorderTraversal(root);
  for (let i = 1; i < list.length; i++) {
    const prve = list[i - 1];
    const cur = list[i];
    prve.left = null;
    prve.right = cur;
  }
};

/**
 * 先序遍历
 * @param {*} root 
 * @param {*} list 
 */
var preorderTraversal = function (root) {
  let list = [root];
  let ret = []
  while (list.lenth) {
    let node = list.pop();
    ret.push(node.val);
    node.left && list.push(node.left);
    node.right && list.push(node.right);
  }
  return ret;
}
// @lc code=end

