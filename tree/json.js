const json = {
  a: { b: { c: 1 } },
  d: [1, 2],
};

const dfs = (n, path) => {
  Object.keys(n).forEach((k) => {
    if (typeof n[k] === "object") {
      dfs(n[k], [...path, k]);
    } else {
      console.log([...path, k].join("."), n[k]);
    }
  });
};

dfs(json, []);
