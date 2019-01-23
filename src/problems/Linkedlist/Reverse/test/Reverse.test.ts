import { expect } from "chai";
import LinkedList from "../../Linkedlist";
import { Reverse } from "../Reverse";

describe("Tests for Reverse", () => {
  it("Test Reverse", () => {
    const list: LinkedList<number> = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    const reversed: LinkedList<number> | null = Reverse(list);
    if (reversed) {
      expect(reversed.toString()).to.be.equal("54321");
    }
  });
  it("Test Reverse 2", () => {
    const list: LinkedList<string> = new LinkedList<string>();
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("d");
    list.append("e");
    const reversed: LinkedList<string> | null = Reverse(list);
    if (reversed) {
      expect(reversed.toString()).to.be.equal("edcba");
    }
  });
});
