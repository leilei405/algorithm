/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-20 16:49:34
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-20 17:07:10
 * @FilePath: \algorithm\linkList\环形链表.js
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//  输入 head = [3,2,0,-4] pos = 1
var hasCycle = function (head) {
  let p1 = head; // 慢指针
  let p2 = head; // 快指针

  while (p1 && p2 && p2.next) {
    p1 = p1.next; // 走一步
    p2 = p2.next.next; // 走俩步
    if (p2) {
      p2 = p2.next;
    }
    if (p1 === p2) {
      return true;
    }
  }
  return false;
};

// 思路
// 1. 遍历链表
// 2. 2人比赛  速度快的一定会超过速度慢的人一圈
// 3. 用一快一慢俩个指针遍历链表，如果指针能够相逢，那么链表就有圈

// 解题
// 1. 用一快一慢俩个指针遍历链表，如果指针能够相逢，返回true
// 2. 遍历结束  没有相逢返回false
