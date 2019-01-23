import LinkedList, { LinkedListNode } from "../Linkedlist/index";

export default function<U>(List: LinkedList<U>) {
  const Traverser: (Node: LinkedListNode<U>) => void = function(
    Node: LinkedListNode<U>
  ) {
    if (Node.next) {
      Traverser(Node.next);
    }
    console.log(Node.value);
  };
  if (List.head) {
    Traverser(List.head);
  }
}
