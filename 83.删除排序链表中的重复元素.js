/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
  // val 进行比较
  while (tmp.next !== null) {
    if (tmp.val === tmp.next.val) {
      tmp.next = tmp.next.next;
    } else {
      tmp = tmp.next
    }
  }

  // 哈希表
  // let dummy = {
  //   next: head
  // }
  // let tmp = dummy, arr = new Set();
  // while (tmp.next !== null) {
  //   if (arr.has(tmp.next.val)) {
  //     tmp.next = tmp.next.next;
  //   } else {
  //     arr.add(tmp.next.val);
  //     tmp = tmp.next
  //   }
  // }
  return dummy.next;
};
// @lc code=end

