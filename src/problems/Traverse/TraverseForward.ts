import LinkedList from "../Linkedlist";
import { LinkedListNode } from "../Linkedlist";

export default function<U>(List: LinkedList<U>) {
  if (List.head) {
    let StartNode: LinkedListNode<U> | null = List.head;
    while (StartNode) {
      console.log(StartNode.value);
      if (StartNode.next) {
        StartNode = StartNode.next;
      } else {
        StartNode = null;
      }
    }
  } else {
    console.log("No Elements to Traverse");
  }
}
