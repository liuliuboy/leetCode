/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    // if (head == null) {
    //     return null;
    // }
    //
    // head.next = removeElements(head.next, val);
    // return head.next ? head.next : head;

    // 哨兵节点遍历链表
    let ele = {
        next: head
    };
    let p = ele
    while (p.next) {
        if (p.next.val === val) {
            p.next = p.next.next;
        } else {
            p = p.next
        }
    }
    return ele.next;
};
// @lc code=end

