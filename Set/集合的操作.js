let mySet = new Set();

// 添加值
mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5,'some text' ]
let o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 }); // o 是指向一个对象的引用，而这个对象被添加到了mySet中 引用地址不同指向的不是同一个空间
console.log(mySet, "==mySet==");

// 检查值是否存在
console.log(mySet.has(5), "检查值是否存在5");
console.log(mySet.has(o), "检查值是否存在o");
console.log(mySet.has("some text"), "检查值是否存在some text");

// 删除值
mySet.delete(5); // 删除5

// 迭代Set对象
for (let item of mySet) {
  console.log(item, "===循环===");
}

for (let item of mySet.keys()) {
  console.log(item, "===循环 keys ===");
}

for (let item of mySet.values()) {
  console.log(item, "===循环 values ===");
}

for (let item of mySet.entries()) {
  console.log(item, "===循环 entries ===");
}

// 转换为数组
let myArr1 = Array.from(mySet);
let myArr2 = [...mySet];
console.log(myArr1, "===Array.from==="); // [ 1,'some text', { a: 1, b: 2 } ]
console.log(myArr2, "===[解构]==="); // [ 1,'some text', { a: 1, b: 2 } ]

// 数组转回Set
let mySet2 = new Set([1, 2, 3, 4]);

// 求交集、差集
let intersection = new Set([...mySet].filter((x) => mySet2.has(x)));
let difference = new Set([...mySet].filter((x) => !mySet2.has(x)));
console.log(intersection, "===交集==="); // Set [ 1, 2 ]
console.log(difference, "===差集==="); // Set [ 1, 2 ]

// 获取Set的大小
console.log(mySet.size, "===Size==="); // 3

// 清空Set
mySet.clear();
console.log(mySet.size, "====Clear==="); // 0
