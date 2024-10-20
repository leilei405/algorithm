/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-20 16:50:16
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-20 16:50:22
 * @FilePath: \algorithm\linkList\链表中重复元素去重.js
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 思路
// 1. 因为链表是有序的 所以重复元素一定是相邻的
// 2. 遍历链表 当前元素与下个元素值相同  就删除下个元素值

// 解题
// 1. 遍历链表 当前元素与下个元素值相同  就删除下个元素值
// 2. 遍历结束后  返回原链表head
var deleteDuplicates = function (head) {
  let p = head;
  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next; // remove duplicates 更改链表指向删除链表中的元素
    } else {
      p = p.next;
    }
  }
  return head;
};

// 时间复杂度应该是O(n)
// 空间复杂度应该是O(1)
