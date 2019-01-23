import GetLength from "../GetLength";
import Linkedlist from "../../Linkedlist";
import { expect } from "chai";

describe("GetLength tests for Linkedlist", () => {
  it("GetLength returns correct length for List<number>", () => {
    const list = new Linkedlist<number>();
    list.append(10);
    list.append(20);
    list.append(30);
    list.append(40);
    expect(GetLength(list)).to.be.equal(4);
  });
  it("GetLength returns correct length for List<string>", () => {
    const list = new Linkedlist<string>();
    list.append("10");
    list.append("20");
    list.append("30");
    list.append("40");
    list.append("50");
    expect(GetLength(list)).to.be.equal(5);
  });
});
