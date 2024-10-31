// 二分搜索法
Array.prototype.orderSort = function (item) {
  let low = 0; // 最小索引
  let high = this.length - 1; // 最大索引

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = this[mid];
    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

const res = [1, 2, 3, 4, 5, 6, 7].orderSort(5);
console.log(res);
