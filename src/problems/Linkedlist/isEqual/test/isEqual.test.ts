import { expect } from "chai";
import LinkedList from "../../Linkedlist";
import IsEqual from "../isEQual";

describe("Tests equality", () => {
  it("Test equality of strings", () => {
    let listOne = new LinkedList();
    listOne.append("l");
    listOne.append("i");
    listOne.append("s");
    listOne.append("t");
    let listTwo = new LinkedList();
    listTwo.append("l");
    listTwo.append("i");
    listTwo.append("s");
    listTwo.append("t");
    expect(IsEqual(listOne, listTwo)).to.be.equal(true);
  });

  it("Test equality of strings - negative", () => {
    let listOne = new LinkedList();
    listOne.append("l");
    listOne.append("i");
    listOne.append("s");
    listOne.append("t");
    let listTwo = new LinkedList();
    listTwo.append("l");
    listTwo.append("o");
    listTwo.append("n");
    listTwo.append("g");
    expect(IsEqual(listOne, listTwo)).to.be.equal(false);
  });
});
