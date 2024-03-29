/*
 * @lc app=leetcode.cn id=1038 lang=javascript
 *
 * [1038] 从二叉搜索树到更大和树
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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  let num = 0;
  let stk = [];
  let node = root;
  while (stk.length !== 0 || node !== null) {
    // 遍历右树
    while (node !== null) {
      stk.push(node);
      node = node.right;
    }
    if (stk.length !== 0) {
      // 从栈中弹出
      node = stk.pop();
      // 节点与上一个节点的和相加
      node.val += num;
      // 获取当前节点的值
      num = node.val;
      // 获取节点的左子树
      node = node.left;
    }
  }
  return root;
};
// @lc code=end

