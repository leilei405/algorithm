let node1 = { val: 4 };
let node2 = { val: 5 };
let node3 = { val: 1 };
let node4 = { val: 9 };
node1.next = node2;
node2.next = node3;
node3.next = node4;

// 要删除节点的值为 1，对应节点为 node3
let targetNode = node1;
while (targetNode.val !== 1) {
  targetNode = targetNode.next;
}

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

deleteNode(targetNode);

// 输出链表以验证结果
let currentNode = node1;
while (currentNode) {
  console.log(currentNode.val);
  currentNode = currentNode.next;
}
