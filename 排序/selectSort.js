// 选择排序
Array.prototype.selectSort = function () {
  let sortedArray = this.slice();
  let len = sortedArray.length;

  for (let i = 0; i < len - 1; i++) {
    let indexMin = i;
    for (let j = i; j < len; j++) {
      if (sortedArray[j] < sortedArray[indexMin]) {
        indexMin = j;
      }
    }

    if (indexMin !== i) {
      const temp = sortedArray[i];
      sortedArray[i] = sortedArray[indexMin];
      sortedArray[indexMin] = temp;
    }
  }

  return sortedArray;
};

const arr = [21, 4, 68, 32, 12];
console.log(arr.selectSort());
