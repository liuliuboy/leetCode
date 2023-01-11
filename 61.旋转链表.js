/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (k === 0 || head === null || head.next === null) {
    return head;
  }
  let tmp = head;
  let len = 1;
  // 循环到最后一个节点
  while (tmp.next !== null) {
    tmp = tmp.next;
    len++;
  }
  // 最后一个节点指向头结点形成环
  let add = len - k % len;
  if (add === len) {
    return head
  }

  tmp.next = head;
  while (add) {tmp = tmp.next; add--}; 
  
  head = tmp.next;
  tmp.next = null;
  return head;
};
// @lc code=end

