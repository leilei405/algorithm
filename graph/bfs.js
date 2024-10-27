/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-27 21:06:17
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-27 21:13:05
 * @FilePath: \algorithm\graph\bfs.js
 */
const graph = require("./graph.js");

const visited = new Set();
const q = [2];
visited.add(2);

while (q.length) {
  const n = q.shift();
  console.log(n);
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      q.push(c);
      visited.add(c);
    }
  });
}

