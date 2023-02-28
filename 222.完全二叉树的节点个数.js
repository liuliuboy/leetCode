/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
  const travese = function (node) {
    if (node === null) {
      return 0;
    }
    const leftNum = travese(node.left);
    const rightNum = travese(node.right);
    return leftNum + rightNum + 1;
  }
  return travese(root);

  // if (root === null) {
  //   return 0;
  // }
  // let num = 1;
  // let ret = [root];
  // while (ret.length) {
  //   let node = ret.shift();
  //   if (node.left !== null) {
  //     num++;
  //     ret.push(node.left);
  //   }
  //   if (node.right !== null) {
  //     num++;
  //     ret.push(node.right)
  //   }
  // }
  // return num;
};
// @lc code=end

