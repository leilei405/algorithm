/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-22 20:21:50
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-22 20:45:34
 * @FilePath: \algorithm\Map\无重复字符发的最长子串.js
 */

function lengthOfLongestSubstring(s) {
  let map = new Map(); // 当前窗口字符出现次数
  let ans = 0;
  let i = 0; // 滑动窗口的左边界
  for (let j = 0; j < s.length; j++) {
    // 如果当前字符已经出现过，移动左边界到重复字符的下一个位置
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]), i); // 移动左边界到重复字符的下一个位置
    }
    ans = Math.max(ans, j - i + 1); // 更新最长子串长度
    map.set(s[j], j + 1); // 更新字符的位置
  }
  return ans;
}

// 测试
console.log(lengthOfLongestSubstring("abcabcbb")); // 输出: 3
// console.log(lengthOfLongestSubstring("bbbbb")); // 输出: 1
// console.log(lengthOfLongestSubstring("pwwkew")); // 输出: 3
