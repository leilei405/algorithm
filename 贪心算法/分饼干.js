/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-11-01 21:30:25
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-11-01 21:30:30
 * @FilePath: \algorithm\贪心算法\分饼干.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const sortFunc = function (a, b) {
    return a - b;
  };

  g.sort(sortFunc);
  s.sort(sortFunc);

  let i = 0;
  s.forEach((item) => {
    if (item >= g[i]) {
      i++;
    }
  });
  return i;
};

// n * logN
// o(1) 没有线性增加的
