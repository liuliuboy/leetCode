/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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
 * 迭代
 * @param list1 
 * @param list2 
 * @returns 
 */
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//   let dummy = {
//     next: null
//   }
//   let temp:any = dummy;
//   // 循环两个链表,拼接到另一个值上
//   while (list1 && list2) {
//     // 两个链表值相比较，先拼接小的值
//     if (list1.val <= list2.val) {
//       temp.next = list1;
//       list1 = list1.next;
//     } else {
//       temp.next = list2;
//       list2 = list2.next;
//     }
//     temp = temp.next
//   }
//   temp.next = list1 === null ? list2 : list1
//   return dummy.next
// };

/**
 * 递归
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) {return list2};
  if (list2 === null) {return list1};
  function deep (L1, L2) {
    if (L1 === null) {return L2};
    if (L2 === null) {return L1};
    if (L1.val <= L2.val) {
      L1.next = deep(L1.next, L2)
      return L1;
    } else {
      L2.next = deep(L2.next, L1)
      return L2;
    }
  }
  return deep(list1, list2);
};
// @lc code=end

