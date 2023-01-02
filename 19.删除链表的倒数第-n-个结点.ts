/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = {
    next: head
  };
  let fast = null;
  let slow = fast = dummy;
  // 快指针先走 N 步
  while (n--) {
      fast = fast.next
  }
  // 两个指针同时移动，这时两个指针相差距离 n， 当 fast 到尾部。slow 正好到 n 的前一个节点
  while (fast.next !== null) {
      fast = fast.next;
      slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
    
};
// @lc code=end

