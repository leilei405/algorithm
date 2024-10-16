function isValid(str) {
  if (str.length % 2 === 1) {
    return false;
  }
  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    const left = str[i] === "(" || str[i] === "{" || str[i] === "[";
    if (left) {
      stack.push(str[i]);
    } else {
      const t = stack[stack.length - 1];
      const right =
        (t === "(" && str[i] === ")") ||
        (t === "{" && str[i] === "}") ||
        (t === "[" && str[i] === "]");
      if (right) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// 时间复杂度 O(n) 循环str，str 被循环了n次
// 空间复杂度 O(n) stack= []被开辟了n个内存单元

// 解题步骤
// 1. 新建一个栈
// 2. 扫描字符串，遇左括号入栈，遇到栈顶括号类型匹配的右括号就出栈，类型不匹配直接判定为不合法
// 3. 最后栈空了就合法  否则不合法

// 解法一  栈结构解决
// 解法二  字典的方式（待补充）
