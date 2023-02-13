/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  let stk = [root];
  let res = [];
  // 遍历树
  while (stk.length) {
    let node = stk.pop();
    res.push(node.val);
    node.left && stk.push(node.left);
    node.right && stk.push(node.right);
  }
  // 去重+排序
  let arr = [...new Set(res)].sort();
  // 直接取第二个值
  return arr[1] ? arr[1] : -1;
};
// @lc code=end

