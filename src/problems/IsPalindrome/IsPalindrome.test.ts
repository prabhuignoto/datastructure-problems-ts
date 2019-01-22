import LinkedList from "../Linkedlist/index";
import { IsPalindrome } from "./IsPalindrome";
import { expect } from "chai";

describe("Tests for Linkedlist - IsPalindrome", () => {
  it("Test IsPalindrome", () => {
    const list = new LinkedList<string>();
    list.append("r");
    list.append("a");
    list.append("d");
    list.append("a");
    list.append("r");
    expect(IsPalindrome(list)).to.be.true;
  });
  it("Test IsPalindrome", () => {
    const list = new LinkedList<string>();
    list.append("r");
    list.append("o");
    list.append("a");
    list.append("d");
    expect(IsPalindrome(list)).to.be.false;
  });
})
