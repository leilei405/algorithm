// 顺序搜索
Array.prototype.orderSort = function (item) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
};

const arr = [21, 4, 68, 32, 12];
console.log(arr.orderSort(4));
