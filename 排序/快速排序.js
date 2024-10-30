// 快速排序
Array.prototype.quickSort = function () {
  const sortedArray = this.slice();

  const rec = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const left = [];
    const right = [];
    const mid = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };

  return rec(sortedArray);
};

const arr = [21, 4, 68, 32, 12];
console.log(arr.quickSort());
