/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  
  let newNode = head.next;
  head.next = swapPairs(newNode.next);
  newNode.next = head;
  return newNode;

  // let dummy = {
  //   next: head
  // }
  // let tmp = dummy;
  // // 迭代
  // while (tmp.next !== null && tmp.next.next !== null) {
  //   let node1 = tmp.next;
  //   let node2 = tmp.next.next;
  //   tmp.next = node2
  //   node1.next = node2.next;
  //   node2.next = node1;
  //   tmp = node1;
  // }
  // return dummy.next;
};
// @lc code=end

