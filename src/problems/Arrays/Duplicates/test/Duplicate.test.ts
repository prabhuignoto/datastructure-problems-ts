import { expect } from "chai";
import RemoveDuplicates from "../duplicate";

describe("Tests for Checking duplicates in Array", () => {
  it("Remove duplicates from array", () => {
    const array = [11, 22, 11, 23, 34, 67, 8, 23, 34];
    expect(RemoveDuplicates(array)).to.be.eql([11, 22, 23, 34, 67, 8]);
  });
});
