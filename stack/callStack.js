const fun1 = () => {
  fun2();
};

const fun2 = () => {
  fun3();
};

const fun3 = () => {};

fun1();
// 写一个简单的函数调用例子来理解
// 最后被调用的最先被执行完
