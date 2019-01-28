import { expect } from "chai";
import ZigZag from "../index";

describe("Tests for converting Array into zigzag fashion", () => {
  it("Test one", () => {
    expect(ZigZag([4, 3, 7, 8, 6, 2, 1])).to.be.eql([3, 7, 4, 8, 2, 6, 1]);
  });
  it("Test two", () => {
    expect(ZigZag([1, 4, 3, 2])).to.be.eql([1, 4, 2, 3]);
  });
});
