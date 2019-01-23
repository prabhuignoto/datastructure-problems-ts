import LinkedList from "../Linkedlist";

export function Sort<T extends number>(
  List: LinkedList<T>
): LinkedList<T> | null {
  // counters for counting the occurrences of 0,1,2 in the Linkedlist
  let count0: number = 0;
  let count1: number = 0;
  let count2: number = 0;
  let startNode = List.head;

  // return if there are no elements
  if (!startNode) {
    return null;
  }

  // start counting the occurrences
  while (startNode) {
    if (startNode.value === 0) {
      count0 += 1;
    } else if (startNode.value === 1) {
      count1 += 1;
    } else if (startNode.value === 2) {
      count2 += 1;
    }
    startNode = startNode.next;
  }

  startNode = List.head;

  // overwrite the linked list form the start
  // and fill 0 first and then 1 and 2.
  while (startNode) {
    let value: number = NaN;
    if (count0 > 0) {
      value = 0;
      count0--;
    } else if (count1 > 0) {
      value = 1;
      count1--;
    } else if (count2 > 0) {
      value = 2;
      count2--;
    }
    startNode.value = <T>value;
    startNode = startNode.next;
  }

  return List;
}
