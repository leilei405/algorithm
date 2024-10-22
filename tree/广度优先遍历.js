/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-22 22:05:45
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-22 22:13:57
 * @FilePath: \algorithm\tree\广度优先遍历.js
 */
const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

const bfs = (root) => {
  const q = [root];
  while (q.length) {
    const n = q.shift();
    console.log(n.val);
    n.children.forEach((child) => {
      q.push(child);
    });
  }
};

bfs(tree);
