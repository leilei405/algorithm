// 使用链表指针获取JSON的节点值
const json = {
  a: { b: { c: 1 } },
  d: { e: 2, f: { g: 3 } },
};

const path = ["d", "f", "g"];

let p = json;
path.forEach((k) => {
  p = p[k];
});
