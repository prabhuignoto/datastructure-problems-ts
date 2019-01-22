import GetMiddle from "./GetMiddle";
import Linkedlist from "../Linkedlist/index";
import { expect } from "chai";

describe("Tests for GetMiddle", () => {
  it("Check if GetMiddle works as expected", () => {
    const list = new Linkedlist<number>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    let middle = GetMiddle(list);
    if(middle) {
      expect(middle.value).to.be.equal(3);
      expect(GetMiddle(list)).to.be.not.equal(4);
    }
  });
});
