import LinkedList, { LinkedListNode } from "../Linkedlist/index";
import GetLength from "../GetLength/GetLength";

type Node<T> = LinkedListNode<T> | undefined | null;

export default function MergeList<U>(
  leftList: LinkedList<U>,
  rightList: LinkedList<U>
): Node<U> {
  // get the length of both the left and right list
  let leftListLength = GetLength(leftList);
  let rightListLength = GetLength(rightList);

  // create a dummy node
  let dummyNode: Node<U> = new LinkedListNode<U>(<U>(<unknown>"0"), null);
  // point the head node to dummy node
  let headNode: Node<U> = dummyNode;

  // pick elements from both left and list as long as one list exhasusts(either left or right)
  while (leftListLength > 0 && rightListLength > 0) {
    // store refs to the left and right head
    let leftElement: Node<U> = leftList.head;
    let rightElement: Node<U> = rightList.head;

    if (leftElement && rightElement && headNode) {
      // if the head of right list is smaller than left list's head
      // pop the head of right and store it next to the dummy node
      if (leftElement.value > rightElement.value) {
        let right: Node<U> = rightList.deleteHead();
        
        if (right) {
          headNode.next = right;
          headNode = right;
          rightListLength--;
        }
      }

      // if the head of left list is smaller than right list's head
      // pop the head of left and store it next to the dummy node
      if (rightElement.value > leftElement.value) {
        let left: Node<U> = leftList.deleteHead();

        if (left) {
          headNode.next = left;
          headNode = left;
          leftListLength--;
        }
      }
    }
  }

  // check if elements are still present in  left list.
  // if so move it to the end of the list
  if (leftListLength > 0) {
    headNode.next = leftList.head;
  }

  // check if elements are still present in right list.
  // if so move it to the end of the list
  if (rightListLength > 0) {
    headNode.next = rightList.head;
  }

  return dummyNode;
}
