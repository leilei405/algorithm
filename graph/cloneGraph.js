/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-29 22:22:22
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-30 21:18:55
 * @FilePath: \algorithm\graph\cloneGraph.js
 */
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

// 思路
// 1. 拷贝所有的节点
// 2. 拷贝所有的边

// 步骤
// 1. 深度或广度优先遍历所有节点
// 2. 拷贝所有的节点，存储起来
// 3. 将拷贝的节点，按照原图的连接方法进行连接。

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  // 深度优先遍历
  // if (!node) {
  //     return;
  // }
  // const visited = new Map();
  // const dfs = (n) => {
  //     console.log(n.val);
  //     const copy = new Node(n.val);
  //     visited.set(n, copy);
  //     (n.neighbors || []).forEach(ne => {
  //         if (!visited.has(ne)) {
  //             dfs(ne)
  //         }
  //         copy.neighbors.push(visited.get(ne));
  //     });
  // }
  // dfs(node);
  // return visited.get(node);

  // 广度优先遍历
  if (!node) return;
  const visited = new Map();
  visited.set(node, new Node(node.val)); // 第一个节点也要被访问
  const q = [node];
  while (q.length) {
    const n = q.shift();
    console.log(n.val);
    (n.neighbors || []).forEach((ne) => {
      if (!visited.has(ne)) {
        q.push(ne);
        visited.set(ne, new Node(ne.val));
      }
      visited.get(n).neighbors.push(visited.get(ne));
    });
  }
  return visited.get(node);
};
