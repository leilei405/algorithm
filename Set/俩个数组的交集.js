/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-20 23:14:58
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-20 23:49:53
 * @FilePath: \algorithm\Set\俩个数组的交集.js
 */
/**
 * @param {number[]} num1
 * @param {number[]} num2
 * @return {number[]}
 */
var intersection = function (num1, num2) {
  const uniqueArr = [...new Set(num1)];
  // return uniqueArr.filter((item) => new Set(nums2).has(item));
  return uniqueArr.filter((item) => num2.includes(item));
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
