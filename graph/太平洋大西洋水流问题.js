/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-29 21:09:13
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-29 21:16:31
 * @FilePath: \algorithm\graph\太平洋大西洋水流问题.js
 */
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

const pacificAtlantic = (heights) => {
  if (!heights || !heights[0]) {
    return [];
  }

  const m = heights.length; // 行
  const n = heights[0].length; // 列

  const flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
  const flow2 = Array.from({ length: m }, () => new Array(n).fill(false));
  console.log(flow1, "===flow1===");
  console.log(flow2, "===flow2===");

  const dfs = (r, c, flow) => {
    flow[r][c] = true;
    [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ].forEach(([nr, nc]) => {
      if (
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        !flow[nr][nc] &&
        heights[nr][nc] >= heights[r][c]
      ) {
        dfs(nr, nc, flow);
      }
    });
  };

  // 沿着海岸线逆流而上
  for (let r = 0; r < m; r++) {
    dfs(r, 0, flow1);
    dfs(r, n - 1, flow2);
  }

  for (let c = 0; c < n; c++) {
    dfs(0, c, flow1);
    dfs(m - 1, c, flow2);
  }

  // 收集能流到俩个大洋里的坐标
  const res = [];
  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c++) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c]);
      }
    }
  }

  return res;
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ]),
  "===result==="
);
