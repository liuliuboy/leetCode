/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let dummy = {
    next: head
  }
  let tmp = dummy;
  while (tmp.next !== null && tmp.next.next !== null) {
    if (tmp.next.val === tmp.next.next.val) {
      // 保存相同 val
      let val = tmp.next.val;
      // 循环与保存的 val 比较
      while (tmp.next && tmp.next.val === val) {
        // 指向当前节点下一个节点
        tmp.next = tmp.next.next;
      }
    } else {
      tmp = tmp.next;
    }
  }
  return dummy.next
};
// @lc code=end

