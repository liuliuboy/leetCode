/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  // 当前节点等于下一个节点的 val
  node.val = node.next.val;
  // 指针指向下一个节点的下一个节点
  node.next = node.next.next;

  // let node1 = node.next;
  // node = node1;
  // node.next = node1.next;
};
// @lc code=end

