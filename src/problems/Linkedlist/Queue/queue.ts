import { LinkedListNode } from "./../Linkedlist/index";
import LinkedList from "../Linkedlist";
import GetLength from "../GetLength/GetLength";

export default class Queue<T> {
  public QueueStore: LinkedList<T>;

  constructor() {
    this.QueueStore = new LinkedList();
  }

  enqueue(value: T): T {
    const node: LinkedListNode<T> = this.QueueStore.append(value);
    return node.value;
  }

  dequeue(): T | null {
    const node: LinkedListNode<T> | null = this.QueueStore.deleteHead();
    if (node) {
      return node.value;
    } else {
      return null;
    }
  }

  get hasElements(): boolean {
    return GetLength(this.QueueStore) > 0;
  }
}
