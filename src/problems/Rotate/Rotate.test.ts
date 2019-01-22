import { expect } from "chai";
import LinkedList from "../Linkedlist/index";
import { Rotate } from "./Rotate";


describe("Tests for Linkedlist rotate", () => {
  it("Rotate list 3 times", () => {
    const list = new LinkedList<string>();
    list.append("l");
    list.append("i");
    list.append("s");
    list.append("t");
    const rotated: LinkedList<string> | null = Rotate(list, 3);
    if(rotated) {
      expect(rotated.toString()).to.be.equal("tlis");
    }
  });
  it("Rotate list 5 times", () => {
    const list = new LinkedList<string>();
    list.append("l");
    list.append("i");
    list.append("n");
    list.append("k");
    list.append("e");
    list.append("d");
    list.append("l");
    list.append("i");
    list.append("s");
    list.append("t");
    const rotated: LinkedList<string> | null = Rotate(list, 5);
    if(rotated) {
      expect(rotated.toString()).to.be.equal("dlistlinke");
    }
  })
})