import LinkedList, { LinkedListNode } from "../Linkedlist";

export default function Insert<T>(value: T, List: LinkedList<T>): void {
  // if there are no elements then just append the new element
  if (!List.head) {
    List.append(value);
    return;
  }

  // if the head of the linked list is greater than the new value
  // then just prepend the new node
  if (List.head && List.head.value > value) {
    List.prepend(value);
    return;
  }

  let startNode: LinkedListNode<T> | null = List.head;
  let prevNode: LinkedListNode<T> | null = startNode;

  // iterate as long as the new value is greater than 
  // any values in the linkedlist and keep track of location,
  // where the new node needs to be inserted
  while (startNode && startNode.value < value) {
    // store the reference to previous node
    prevNode = startNode;
    if (startNode) {
      startNode = startNode.next;
    }
  }

  if(prevNode) {
    // if the new node need to be inserted at the end call List.append
    if (!prevNode.next) {
      List.append(value);
    } else {
      let temp = (<LinkedListNode<T>>prevNode).next;
      const newNode: LinkedListNode<T> = new LinkedListNode(value);
      (<LinkedListNode<T>>prevNode).next = newNode;
      newNode.next = temp;
    }
  }
}

