import { expect } from "chai";
import BinarySearchNode from "..";

describe("Tests for BinarySearch", () => {
  it("Test Insert", () => {
    const Node = new BinarySearchNode<number>(10);
    Node.insert(90);
    Node.insert(9);
    Node.insert(-1);
    Node.insert(21);
    expect(Node.leftChild).to.be.not.null;
    expect(Node.rightChild).to.be.not.null;
    expect((<BinarySearchNode<number>>Node.leftChild).value).to.be.equal(9);
    expect((<BinarySearchNode<number>>Node.rightChild).value).to.be.equal(90);
  });
  it("Test find", () => {
    const Node = new BinarySearchNode<number>(10);
    Node.insert(90);
    Node.insert(9);
    Node.insert(-1);
    Node.insert(21);
    expect(Node.find(21)).not.to.be.null;
    expect(Node.find(199)).to.be.null;
  });
  it("Test Delete operation", () => {
    const Node = new BinarySearchNode<number>(10);
    Node.insert(2);
    Node.insert(15);
    Node.insert(6);
    Node.insert(21);
    Node.insert(13);

    Node.delete(21);
    expect(Node.find(21)).to.be.null;

    Node.delete(15);
    expect(Node.find(15)).to.be.null;
    expect((<BinarySearchNode<number>>Node.rightChild).value).to.be.equal(13);
  });
  it("Test Delete operation Root", () => {
    const Node = new BinarySearchNode<number>(10);
    Node.insert(2);
    Node.insert(15);
    Node.insert(6);
    Node.insert(21);
    Node.insert(13);

    Node.delete(10);
    expect(Node.find(10)).to.be.null;
    expect(Node.value).to.be.equal(13);
  });
});
