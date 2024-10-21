const m = new Map();

// 增
m.set("name", "leilei");
m.set("age", 18);
m.set("sex", "male");

// 删
m.delete("name");

// 改
m.set("age", 19);

// 查
console.log(m.get("age"));
