/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-27 00:36:48
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-27 12:10:07
 * @FilePath: \algorithm\堆\js实现最小堆类.js
 */
// 最小堆类
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 交换父节点的值
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

  peek() {
    return this.heap[0];
  }

  // 上移操作
  shiftUp(index) {
    if (index == 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  // 下移操作
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  // 插入操作
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  // 下移操作
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
}

const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(1);
minHeap.pop();
