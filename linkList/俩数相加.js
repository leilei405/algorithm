/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-20 16:48:22
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-20 16:49:09
 * @FilePath: \algorithm\linkList\俩数相加.js
 */
// 解题思路
// 1. 模拟相加操作
// 2. 需要遍历链表

// 解题步骤
// 1. 新建一个空链表
// 2. 遍历被相加的俩个链表，模拟相加操作，将个位数追加到新链表上，将十位数留到下一位去相加。

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 创建一个新的链表
  const l3 = new ListNode(0);
  // 遍历俩个链表
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  let carry = 0; // 十位数 下一轮要相加的数
  // 判断两个链表是否为空
  while (p1 || p2) {
    // 获取两个链表的值
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;
    // 相加
    const val = v1 + v2 + carry;
    // 进位 下一轮要叠加的值
    carry = Math.floor(val / 10);
    // 将相加的结果放入新的链表
    p3.next = new ListNode(val % 10);
    // 判断两个链表是否为空，不为空则指向下一个节点
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    if (p3) p3 = p3.next;
  }
  // 判断是否有进位
  if (carry) {
    p3.next = new ListNode(carry);
  }
  // 返回新的链表
  return l3.next;
};

// 时间复杂度O(n)  n表示l1 l2的较大值者
// 空间复杂度O(n)  n表示l1 l2的较大值者
