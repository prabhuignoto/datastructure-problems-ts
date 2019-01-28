import { expect } from "chai";
import LinkedList from "../../Linkedlist";
import Insert from "..";

describe("Tests for Insert operation in a Sorted List", () => {
  it("Check Insert middle", () => {
    const List = new LinkedList<number>();
    List.append(10);
    List.append(33);
    List.append(40);
    List.append(60);
    List.append(80);

    Insert<number>(54, List);
    expect(List.toString()).to.be.equal("103340546080");
  });
  it("Check Insert front", () => {
    const List = new LinkedList<number>();
    List.append(10);
    List.append(33);
    List.append(40);
    List.append(60);
    List.append(80);

    Insert<number>(5, List);
    expect(List.toString()).to.be.equal("51033406080");
  });
  it("Check Insert front", () => {
    const List = new LinkedList<number>();
    List.append(10);
    List.append(33);
    List.append(40);
    List.append(60);
    List.append(80);

    Insert<number>(95, List);
    expect(List.toString()).to.be.equal("103340608095");
  });
});
