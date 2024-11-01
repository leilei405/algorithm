/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-11-01 21:33:07
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-11-01 21:35:00
 * @FilePath: \algorithm\动态规划\打家劫舍.js
 */
var rob = function (nums) {
  // 解法一
  if (nums.length === 0) {
    return 0;
  }

  const dp = [0, nums[0]];
  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
  }

  console.log(dp);
  return dp[nums.length];
  // O(n)
  // O(n)
};

var rob = function (nums) {
  // 解法二
  if (nums.length === 0) {
    return 0;
  }

  let dp0 = 0;
  let dp1 = nums[0];

  for (let i = 2; i <= nums.length; i++) {
    const dp2 = Math.max(dp0 + nums[i - 1], dp1);
    dp0 = dp1;
    dp1 = dp2;
  }

  console.log(dp1);
  return dp1;
  // O(n)
  // O(n)
};
