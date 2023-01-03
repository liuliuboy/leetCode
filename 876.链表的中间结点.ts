/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
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

/**
 * 快慢指针
 * @param head 
 * @returns 
 */
function middleNode(head: ListNode | null): ListNode | null {
  let fast = null;
  let last = fast = head;
  // fast 每次走 2 步，last 每次走 1 步。fast 走到尾部。last 正好到链表中间节点
  while (fast && fast.next) {
    fast = fast.next.next;
    last = last.next;
  }
  return last
};
// @lc code=end

