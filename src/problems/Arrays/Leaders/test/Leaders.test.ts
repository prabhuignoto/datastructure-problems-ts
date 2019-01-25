import { expect } from "chai";
import { FindLeadersSimple, FindLeadersEfficient } from "../Leaders";

describe("Tests for Array leaders", () => {
  it("Test one", () => {
    const array = [99, 3, 5, 1, 9, 8, 33, 4, 1, 22, 3];

    expect(FindLeadersSimple(array)).to.be.eql([22, 33, 99, 3]);
    expect(FindLeadersEfficient(array)).to.be.eql([99, 33, 22, 3]);
  });

  it("Test Two", () => {
    const array = [16, 17, 4, 3, 5, 2];

    expect(FindLeadersSimple(array)).to.be.eql([5, 17, 2]);
    expect(FindLeadersEfficient(array)).to.be.eql([17, 5, 2]);
  });

  it("Test Two", () => {
    const array = [17, 4, 5, 7, 3];

    expect(FindLeadersSimple(array)).to.be.eql([7, 17, 3]);
    expect(FindLeadersEfficient(array)).to.be.eql([17, 7, 3]);
  });
});
