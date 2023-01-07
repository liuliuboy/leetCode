/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head == null) {
    return head
  }
  let slow = head;
  let fast = head;
  // 快慢指针判断是否是环形链表
  while (fast != null) {
    // slow 走一步
    slow = slow.next;
    if (fast.next != null) {
      // fast 走两步
      fast = fast.next.next;
    } else {
      return null;
    }
    // 快慢指针相遇
    if (fast === slow) {
      let cur = head;
      // cur 与 slow 相等给出当前节点
      while (cur !== slow) {
        cur = cur.next;
        slow = slow.next;
      }
      return cur;
    }
  }
  return null;
};
// @lc code=end

