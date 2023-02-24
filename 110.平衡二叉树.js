/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  function travese (node) {
    if (node === null) {
      return 0;
    }
    let leftDep = travese(node.left);
    if (leftDep === -1) {
      return -1;
    }

    let rightDep = travese(node.right);
    if (rightDep === -1) {
      return -1
    }

    if (Math.abs(leftDep - rightDep) > 1) {
      // 取绝对值大于 1 返回 -1
      return -1;
    } else {
      // 去最左右树最大深度加上头节点
      return Math.max(leftDep, rightDep) + 1;
    }
  }

  // 得到的数不等于 -1，说明高度差绝对值不超过 1
  return travese(root) !== -1;
};
// @lc code=end

