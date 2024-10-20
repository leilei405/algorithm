/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-20 23:06:27
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-20 23:12:59
 * @FilePath: \algorithm\Set\set.js
 */

// Set 集合基本操作
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// 1. 去重
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [ 1, 2, 3, 4, 5 ]

// 2. 判断元素是否存在集合中
const set = new Set(arr);
console.log(set); // Set(5) { 1, 2, 3, 4, 5 }
console.log(set.has(5)); // true

// 3. 求交集
const set2 = new Set([1, 3, 5, 7, 9]);
const intersection = new Set([...set].filter((item) => set2.has(item)));
console.log(intersection); // Set(1) { 1, 3, 5 }
