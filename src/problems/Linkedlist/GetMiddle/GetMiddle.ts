import LinkedList, { LinkedListNode } from "../Linkedlist";
import GetLength from "../GetLength/GetLength";

type Node<U> = LinkedListNode<U> | null;

export default function<U>(List: LinkedList<U>): Node<U> {
  // list is empty nothing to do
  if (!List.head) {
    return null;
  }

  // get the number of nodes
  let nodeCount = GetLength(List);

  let iterNode: Node<U> = List.head;
  let iterCount = 0;
  let node: Node<U> = null;

  if (nodeCount > 0) {
    // get the middle
    const middle = Math.floor(nodeCount / 2);

    // iterate as long as the middle matches the iterCount
    while (iterNode) {
      if (iterCount === middle) {
        node = iterNode;
        break;
      }
      if (iterNode.next) {
        iterNode = iterNode.next;
      } else {
        iterNode = null;
      }
      iterCount += 1;
    }
  }

  return node;
}
