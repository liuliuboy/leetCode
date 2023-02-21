/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) {
    return 0
  }
  let dep = 0;
  let stk = [root];
  // 
  while (stk.length) {
    // 获取队列长度
    let len = stk.length;
    while (len > 0) {
      // 广度优先
      const node = stk.shift();
      node.children && node.children.map((item) => {
        // 获取当前节点子节点，放入队列中
        stk.push(item);
      })
      // 更新队列长度
      len--;
    }
    // 计算层级
    dep++;
  }
  return dep;
};
// @lc code=end

