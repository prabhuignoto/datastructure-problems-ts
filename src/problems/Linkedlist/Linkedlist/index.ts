export class LinkedListNode<T> {
  public value: T;
  public next: LinkedListNode<T> | null;

  constructor(value: T, next: LinkedListNode<T> | null = null) {
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

  append(value: T): LinkedListNode<T> {
    const node = new LinkedListNode(value, null);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    }

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    }

    return node;
  }

  prepend(value: T) {
    const node = new LinkedListNode(value, this.head);
    this.head = node;
  }

  deleteHead(): LinkedListNode<T> | null {
    if (!this.head) {
      return null;
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
    if (!node) {
      return;
    }
    let startNode: LinkedListNode<T> | null = this.head;

    if (startNode) {
      // make sure the head is different from value
      while (startNode && startNode.value === value) {
        this.deleteHead();
        startNode = startNode.next;
      }

      while (startNode && startNode.next) {
        if (startNode.next.value === value) {
          startNode.next = startNode.next.next;
        }
        startNode = startNode.next;
      }
    }
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

  toString(): string {
    let startNode = this.head;
    let outString = "";

    while (startNode) {
      outString += startNode.value;
      startNode = startNode.next;
    }

    return outString;
  }
}
