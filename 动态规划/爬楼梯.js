/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-11-01 21:32:39
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-11-01 21:32:54
 * @FilePath: \algorithm\动态规划\爬楼梯.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var climbStairs = function (n) {
  if (n < 2) {
    return 1;
  }

  const dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp);
  return dp[n];
};
// O(n)

var climbStairs = function (n) {
  // 解法二
  if (n < 2) return 1;
  let a = 1;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a;
    a = b;
    b = b + temp;
  }

  return b;
};
