/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-22 21:14:30
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-22 21:26:35
 * @FilePath: \algorithm\Map\最小覆盖子串.js
 */

/**
 * 找到字符串 s 中包含字符串 t 中所有字符的最小子串
 * @param {string} s - 源字符串
 * @param {string} t - 目标字符串
 * @returns {string} - 最小子串，如果不存在则返回空字符串
 */

function minWindow(s, t) {
  let need = new Map();
  let window = new Map();
  for (let c of t) {
    need.set(c, (need.get(c) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let valid = 0;
  let start = 0;
  let len = Infinity;

  while (right < s.length) {
    let c = s[right];
    right++;
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }

    while (valid === need.size) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      let d = s[left];
      left++;
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }

  return len === Infinity ? "" : s.substr(start, len);
}

// 测试
console.log(minWindow("ADOBECODEBANC", "ABC")); // 输出: "BANC"
