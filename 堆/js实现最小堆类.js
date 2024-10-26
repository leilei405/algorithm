/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-27 00:36:48
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-27 01:09:29
 * @FilePath: \algorithm\堆\js实现最小堆类.js
 */
// 最小堆类
class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  // 获取父节点位置 （index - 1） / 2
  getParentIndex(i) {
    return (i - 1) >> 1;
  }

  // 获取左侧节点的位置
  getLeftIndex(i) {
    return i * 2 + 1;
  }

  // 获取右侧节点的位置
  getRightIndex(i) {
    return i * 2 + 2;
  }

  // 获取堆大小的方法
  size() {
    return this.heap.length;
  }

  // 上移操作
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.heap[index] >= this.heap[parentIndex]) {
        break;
      }
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
}

const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(7);
minHeap.insert(1);
minHeap.insert(9);
