// 插入排序
Array.prototype.insertSort = function () {
  let sortedArray = this.slice();

  for (let i = 1; i < sortedArray.length; i++) {
    const temp = sortedArray[i];
    let j = i;

    while (j > 0) {
      if (temp < sortedArray[j - 1]) {
        sortedArray[j] = sortedArray[j - 1];
      } else {
        break;
      }
      j--;
    }
    sortedArray[j] = temp;
  }

  return sortedArray;
};

const arr = [21, 4, 68, 32, 12];
console.log(arr.insertSort());
