/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
  const isCheck = (root1, root2) => {
    // 判断树左右是否为 null,相等返回 true
    if (root1 === null && root2 === null) {
      return true;
    }
    // 判断树左右有一个为 null 返回 false
    if (root1 === null || root2 === null) {
      return false;
    }
    // 两节点相同进入下一个递归
    if (root1.val === root2.val) {
      return isCheck(root1.left, root2.right) && isCheck(root1.right, root2.left)
    }
    // 没有相同节点 返回 false
    return false;
  }
  return isCheck(root.left, root.right);
};

//  var isCheck = function(p, q) {
//   if (!p && !q) {return true};
//   if (!p || !q) {return false};
//   return p.val === q.val && isCheck(p.left, q.right) && isCheck(p.right, q.left);
// }

// var isSymmetric = function(root) {
//   return isCheck(root, root);
// };
// @lc code=end

