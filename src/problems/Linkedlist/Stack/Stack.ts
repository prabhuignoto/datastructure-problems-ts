import LinkedList from "../Linkedlist";

export default class Stack<T> {
  public StackStore: LinkedList<T>;

  constructor() {
    this.StackStore = new LinkedList();
  }

  push(value: T) {
    this.StackStore.prepend(value)
  }

  pop() {
    return this.StackStore.deleteHead();
  }

  peek() {
    if(this.StackStore.head) {
      return this.StackStore.head.value;
    }
  }

  isEmpty() {
    return this.StackStore.head === null;
  }
}