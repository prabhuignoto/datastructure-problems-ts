import LinkedList, { LinkedListNode } from "../Linkedlist/index";
import { expect } from "chai";
import MergeList from "./MergeSortedList";

describe("Tests for MergeSortedList", () => {
  it("Check if Merge works correctly", () => {
    const list: LinkedList<number> = new LinkedList<number>();
    list.append(11);
    list.append(21);
    list.append(51);
    const list2: LinkedList<number> = new LinkedList<number>();
    list2.append(31);
    list2.append(71);
    list2.append(91);
    const mergedNode = MergeList(list, list2);
    if (mergedNode) {
      let startNode = mergedNode.next;
      let finalString = "";
      while (startNode) {
        finalString += startNode.value;
        startNode = startNode.next;
      }
      expect(finalString).to.be.equal("112131517191");
    }
  });
});
