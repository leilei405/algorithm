/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-17 22:50:28
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-17 22:50:35
 * @FilePath: \algorithm\queue\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var RecentCounter = function () {
  this.q = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.q.push(t);
  while (this.q[0] < t - 3000) {
    this.q.shift();
  }
  return this.q.length;
};

// 时间复杂度 O(n)  while 循环了n次
// 空间复杂度 O(n)  最终的请求次数
