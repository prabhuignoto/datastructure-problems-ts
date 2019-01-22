export class LinkedListNode<T> {
  public value: T;
  public next: LinkedListNode<T> | null;

  constructor(value: T, next: LinkedListNode<T> | null) {
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList<T> {
  public head: LinkedListNode<T> | null;
  public tail: LinkedListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: T) {
    const node = new LinkedListNode(value, null);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(value: T) {
    const node = new LinkedListNode(value, this.head);
    this.head = node;
  }

  deleteHead() {
    if (!this.head) {
      return;
    }
    let deleteHead = null;

    if (this.head.next) {
      deleteHead = this.head;
      this.head = this.head.next;
    } else {
      deleteHead = this.head;
      this.head = null;
      this.tail = null;
    }

    return deleteHead;
  }

  find(value: T) {
    let startNode = this.head;

    if (!startNode) {
      return;
    }

    while (startNode) {
      if (startNode.value === value) {
        return startNode;
      }
      startNode = startNode.next;
    }

    return -1;
  }

  delete(value: T) {
    const node = this.find(value);
  }

  deleteTail() {
    let startNode = this.head;

    if (!startNode) {
      return;
    }

    while (startNode.next) {
      if (!startNode.next.next) {
        startNode.next = null;
        this.tail = startNode;
      } else {
        startNode = startNode.next;
      }
    }
  }

  toString() {
    let startNode = this.head;
    let outString = "";

    while (startNode) {
      outString += startNode.value;
      startNode = startNode.next;
    }

    return outString;
  }
}