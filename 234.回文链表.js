/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = fast = head;
  let prve = null;
  while (fast && fast.next) {
    fast = fast.next.next;
    let next = slow.next;
    slow.next = prve;
    prve = slow;
    slow = next;
  }
  if (fast) {
    slow = slow.next;
  }
  while(prve && slow) {
    if (prve.val !== slow.val) {
      return false;
    }
    prve = prve.next;
    slow = slow.next;
  }
  return true;
};
// @lc code=end

