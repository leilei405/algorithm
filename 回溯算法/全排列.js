/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-11-01 21:50:52
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-11-01 21:51:27
 * @FilePath: \algorithm\回溯算法\全排列.js
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];

  const backTrack = (path) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }

    nums.forEach((item) => {
      if (path.includes(item)) {
        return;
      }
      backTrack(path.concat(item));
    });
  };

  backTrack([]);
  return res;
};
