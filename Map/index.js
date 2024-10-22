/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-21 19:16:28
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-22 20:06:08
 * @FilePath: \algorithm\Map\index.js
 */
const m = new Map();

// 增
m.set("name", "leilei");
m.set("age", 18);
m.set("sex", "male");

console.log(m.has("dog"));

// 删
m.delete("name");
m.clear(); // 清空

// 改
m.set("age", 19);

// 查
console.log(m.get("age"));
