/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-21 19:37:51
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-21 19:45:24
 * @FilePath: \algorithm\Map\俩个数组的交集.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map = new Map();
  const result = [];
  nums1.forEach((item) => {
    map.set(item, true);
  });
  nums2.forEach((item) => {
    if (map.get(item)) {
      result.push(item);
      map.delete(item);
    }
  });
  return result;
};
