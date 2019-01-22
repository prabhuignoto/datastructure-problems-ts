import LinkedList from "../Linkedlist";

export function Sort<T extends number>(List: LinkedList<T>) {
  let count0: number = 0;
  let count1: number = 0;
  let count2: number = 0;
  let startNode = List.head;

  if (!startNode) {
    return;
  }

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
}
