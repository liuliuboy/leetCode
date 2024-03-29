/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  if (root === null) {
    return false;
  }

  if (root.val === subRoot.val) {
    if (isSameTree(root, subRoot)) {
      return true;
    }
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

/**
 * 对比二叉树每个节点是否相同
 * @param {*} p 
 * @param {*} q 
 * @returns 
 */
const isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// @lc code=end

