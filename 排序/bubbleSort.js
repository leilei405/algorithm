// 冒泡排序
Array.prototype.bubbleSort = function () {
  let sortedArray = this.slice();
  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        [sortedArray[j], sortedArray[j + 1]] = [
          sortedArray[j + 1],
          sortedArray[j],
        ];
      }
    }
  }
  return sortedArray;
};

const arr = [21, 4, 68, 32, 12, 5, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.bubbleSort());
