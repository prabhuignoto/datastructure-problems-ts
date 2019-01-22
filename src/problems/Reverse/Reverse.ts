import LinkedList, { LinkedListNode } from "../Linkedlist";
type Node<U> = LinkedListNode<U> | null;

export function Reverse<U>(List: LinkedList<U>) {
  if (!List.head) {
    return;
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
}
