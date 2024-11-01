/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-11-01 21:31:05
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-11-01 21:31:21
 * @FilePath: \algorithm\贪心算法\买股票.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var maxProfit = function (prices) {
  let profit = 0; // 利润
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};
// O(n)
// O(1) 非线性增长
