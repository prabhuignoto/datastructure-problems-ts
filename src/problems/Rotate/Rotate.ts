import LinkedList, { LinkedListNode } from "../Linkedlist";
import GetLength from "../GetLength/GetLength";

type Node<U> = LinkedListNode<U> | null;

export function Rotate<U>(List: LinkedList<U>, times: number): LinkedList<U> | null {
  if (!List.head) {
    return null;
  }

  let listLength = GetLength(List);

  if (listLength < times) {
    console.log("Cannot rotate");
    return null;
  }

  let kthElement: Node<U> = null;
  let iter = 0;
  let startElement: Node<U> = List.head;
  const curHead = List.head;
  let newHead = null;

  while (startElement) {
    if (iter + 1 === times) {
      kthElement = startElement;
      break;
    }
    if (startElement.next) {
      startElement = startElement.next;
    } else {
      startElement = null;
    }
    iter += 1;
  }

  if (kthElement && List.tail) {
    // make next of kthelement as new head
    newHead = kthElement.next;
    // move the current head to the end
    List.tail.next = curHead;
    // repoint new head
    List.head = newHead;
    // update new tail
    kthElement.next = null;
    List.tail = kthElement;
  }

  return List
}
