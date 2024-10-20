/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-21 20:35:46
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-21 20:45:43
 * @FilePath: \algorithm\Map\有效括号.js
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  const stack = [];
  const map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map.has(c)) {
      stack.push(c);
    } else {
      const t = stack[stack.length - 1];
      if (map.get(t) === c) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

isValid("()");
