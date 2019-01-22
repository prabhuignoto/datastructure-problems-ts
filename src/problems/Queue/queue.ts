import LinkedList from "../Linkedlist";

export default class Queue<T> {
  public QueueStore: LinkedList<T>;

  constructor() {
    this.QueueStore = new LinkedList();
  }

  enqueue(value: T) {
    this.QueueStore.append(value);
  }

  dequeue() {
    return this.QueueStore.deleteHead();
  }

}