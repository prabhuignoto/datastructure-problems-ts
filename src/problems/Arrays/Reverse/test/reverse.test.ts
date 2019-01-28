import { expect } from "chai";
import Reverse from "..";

describe("Tests for reverse", () => {
  it("Test one for reverse", () => {
    expect(Reverse([2, 4, 5, 8])).to.be.eql([8, 5, 4, 2]);
  });
  it("Test one for reverse", () => {
    expect(Reverse(["a", "c", "x", "b"])).to.be.eql(["b", "x", "c", "a"]);
  });
});
