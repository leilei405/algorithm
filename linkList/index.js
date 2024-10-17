/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-17 23:04:09
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-17 23:12:14
 * @FilePath: \algorithm\linkList\index.js
 */
const a = { val: "a" };
const b = { val: "b" };
const c = { val: "c" };
const d = { val: "d" };
a.next = b;
b.next = c;
c.next = d;

// 遍历链表
let p = a; // 声明指针
while (p) {
  console.log(p.val);
  p = p.next;
}

// 插入
const e = { val: "e" };
c.next = e;
c.next = d;

// 删除
c.next = d;
