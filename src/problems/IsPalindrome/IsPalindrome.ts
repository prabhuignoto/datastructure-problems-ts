import LinkedList, { LinkedListNode } from "../Linkedlist";
import Stack from "../Stack/Stack";

type Node<U> = LinkedListNode<U> | null;

export function IsPalindrome<T>(List: LinkedList<T>) {
  let startNode: Node<T> = List.head;
  let ListStack: Stack<T> = new Stack();
  let isPalindrome: boolean = true;

  // no head nothing to do
  if (!startNode) {
    return;
  }

  // walk through the linked list and fill the stack
  while (startNode) {
    ListStack.push(startNode.value);
    startNode = startNode.next;
  }

  // repoint the startnode to head
  startNode = List.head;

  // iterate the linked list
  while (startNode) {
    const top = ListStack.pop();
    // set isPalindrome to false if the value dont match
    if (!(top && top.value === startNode.value)) {
      isPalindrome = false;
    }
    startNode = startNode.next;
  }

  return isPalindrome;
}
