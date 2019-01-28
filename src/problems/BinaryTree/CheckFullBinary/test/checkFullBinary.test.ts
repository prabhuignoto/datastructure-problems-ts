import {expect} from "chai";
import BinaryTreeNode from "../../BinaryTree";
import isFullBinary from "..";

describe("Tests for Checking Full Binary", () => {
  it("Test one", () => {
    const Node = new BinaryTreeNode<number>(9);
    Node.setLeftChild(new BinaryTreeNode(10));
    Node.setRightChild(new BinaryTreeNode(12));

    expect(isFullBinary(Node)).to.be.true;
  });
  it("Test two", () => {
    const Node = new BinaryTreeNode<number>(9);
    Node.setLeftChild(new BinaryTreeNode(10));
    Node.setRightChild(new BinaryTreeNode(12));

    (<BinaryTreeNode<number>>Node.leftChild).setLeftChild(new BinaryTreeNode<number>(99));

    expect(isFullBinary(Node)).to.be.false;
  })
})