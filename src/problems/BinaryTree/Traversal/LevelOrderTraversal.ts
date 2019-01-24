import BinaryTreeNode from "../BinaryTree";
import Queue from "../../LinkedList/Queue/queue";

export default function LOT<T>(
  Node: BinaryTreeNode<T>,
  callback: (val: T) => void
): void {
  // return if the root node is empty
  if (!Node) {
    return;
  }

  // initialize a queue ans store the root node
  const queue = new Queue<BinaryTreeNode<T>>();
  queue.enqueue(Node);

  // iterate as long as the queue has elements
  while (queue.hasElements) {
    // dequeue the node
    let node: BinaryTreeNode<T> | null = queue.dequeue();

    // if node exists pass the value to callback 
    // and enqueue left and right child (in that order)
    if (node) {
      callback(node.value);
      if (node.leftChild) {
        queue.enqueue(node.leftChild);
      }
      if (node.rightChild) {
        queue.enqueue(node.rightChild);
      }
    }
  }
}
