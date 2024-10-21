const m = new Map();

// 增
m.set("name", "leilei");
m.set("age", 18);
m.set("sex", "male");

// 删
m.delete("name");
m.clear(); // 清空

// 改
m.set("age", 19);

// 查
console.log(m.get("age"));
