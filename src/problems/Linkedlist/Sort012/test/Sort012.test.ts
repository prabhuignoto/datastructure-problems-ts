import { expect } from "chai";
import LinkedList from "../../Linkedlist";
import { Sort } from "../Sort012";

describe("Tests for Sort012", () => {
  it("Check if Sort012 sorts correctly", () => {
    const List = new LinkedList<number>();
    List.append(0);
    List.append(2);
    List.append(1);
    List.append(2);
    List.append(1);
    List.append(0);
    const sorted = Sort(List);
    if (sorted) {
      expect(sorted.toString()).to.be.equal("001122");
    }
  });
});
