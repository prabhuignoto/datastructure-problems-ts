import BinaryTreeNode from "../BinaryTree";
import Queue from "../../LinkedList/Queue/queue";

export default function IsIdentical<T>(
  NodeOne: BinaryTreeNode<T>,
  NodeTwo: BinaryTreeNode<T>
) {
  if (!NodeOne || !NodeTwo) {
    return;
  }

  // create two different queues and execute a level order traversal
  const queue1 = new Queue<BinaryTreeNode<T>>();
  const queue2 = new Queue<BinaryTreeNode<T>>();
  let isIdentical: boolean = true;

  // include the root nodes intow different queues
  queue1.enqueue(NodeOne);
  queue2.enqueue(NodeTwo);

  // iterate as long as the queue has elements
  while (queue1.hasElements && queue2.hasElements) {
    // dequeue elements from the front
    let node1: BinaryTreeNode<T> | null = queue1.dequeue();
    let node2: BinaryTreeNode<T> | null = queue2.dequeue();

    if (node1 && node2) {
      // if values dont match return false
      if (node1.value !== node2.value) {
        isIdentical = false;
        break;
      } else {
        // enqueue left and right childrens of both the nodes
        if (node1.leftChild) {
          queue1.enqueue(node1.leftChild);
        }
        if (node1.rightChild) {
          queue1.enqueue(node1.rightChild);
        }
        if (node2.leftChild) {
          queue2.enqueue(node2.leftChild);
        }
        if (node2.rightChild) {
          queue2.enqueue(node2.rightChild);
        }
      }
    }
  }

  return isIdentical && !queue1.hasElements && !queue2.hasElements;
}
