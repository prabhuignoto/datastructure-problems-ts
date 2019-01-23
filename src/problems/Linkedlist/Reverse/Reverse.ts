import LinkedList, { LinkedListNode } from "../Linkedlist";
type Node<U> = LinkedListNode<U> | null;

export function Reverse<U>(List: LinkedList<U>): LinkedList<U> | null {
  if (!List.head) {
    return null;
  }

  let prev: Node<U> = null;
  let next: Node<U> = null;
  let curNode: Node<U> = List.head;

  while (curNode) {
    next = curNode.next;
    curNode.next = prev;
    prev = curNode;
    curNode = next;
  }

  List.tail = List.head;
  List.head = prev;

  return List;
}
