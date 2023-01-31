/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * 递归层层比较
 * 与求最大深度相反，需要注意根节点左右子树为空不构成子树，需要单独判断。
 */
var minDepth = function(root) {
  if (root === null) {
    return 0;
  }
  // 左右子树节点都为 null 只有头结点返回 1 
  if (root.left === null && root.right === null) {
    return 1;
  }
  // 左子树节点 null 不参与比较
  if (root.right === null) {
    return minDepth(root.left) + 1;
  }
  // 右子树节点 null 不参与比较
  if (root.left === null) {
    return minDepth(root.right) + 1;
  }
  // min 找最小值
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

/**
 * 迭代
 */
var minDepth1 = function(root) {
  if (root === null) {
    return 0;
  }
  let q = [root];
  let deep = 1;
  while (q.length) {
    let len = q.length;
    for (let i = 0; i < len; i++) {
      let node = q.shift();
      if (node.left === null && node.right === null) {
        return deep;
      }
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    deep++;
  }
  return deep;
};
// @lc code=end

