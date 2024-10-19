/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-19 21:20:56
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-19 21:44:38
 * @FilePath: \algorithm\linkList\反转链表.js
 */
// 定义链表节点
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 创建链表
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(head, "head");

// 反转链表
var reverseList = function (head) {
  let p1 = head; // [1,2,3,4,5]
  let p2 = null; // null
  while (p1) {
    let temp = p1.next; // [2,3,4,5] [3,4,5] [4,5] [5] [null]
    p1.next = p2; // [null] [1,null] [2,1,null] [3,2,1,null] [4,3,2,1,null]
    p2 = p1; // [1,null] [2,1,null] [3,2,1,null] [4,3,2,1,null] [5,4,3,2,1,null]
    p1 = temp; // [2,3,4,5] [3,4,5] [4,5] [5] [null]
  }
  return p2;
};

// 输出反转后的链表
let reversedHead = reverseList(head);
let currentNode = reversedHead;
while (currentNode) {
  console.log(currentNode.val);
  currentNode = currentNode.next;
}
