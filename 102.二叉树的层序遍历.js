/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 * 迭代 BFS 广度优先搜索
 */
var levelOrder = function(root) {
  // if (root === null) {
  //   return [];
  // }
  // let ret = [];
  // let stk = [root];
  // while (stk.length !== 0) {
  //   let len = stk.length;
  //   let arr = [];
  //   for (let i = 0; i < len; i++) {
  //     const node = stk.shift(); // 先进先出
  //     arr.push(node.val);
  //     node.left && stk.push(node.left);
  //     node.right && stk.push(node.right);
  //   }
  //   ret.push(arr);
  // }
  // return ret;

  // 深度优先 递归
  let ret = [];
  const dfs = (node, leve) => {
    if (node === null) {
      return [];
    }
    if (!ret[leve]) {
      ret[leve] = [];
    }
    ret[leve].push(node.val);
    dfs(node.left, leve + 1)
    dfs(node.right, leve + 1)
  };

  dfs(root, 0);
  return ret;
};
// @lc code=end

