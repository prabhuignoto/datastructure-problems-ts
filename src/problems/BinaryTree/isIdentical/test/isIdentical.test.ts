import { expect } from "chai";
import BinaryTreeNode from "../../BinaryTree";
import IsIdentical from "..";

describe("Tests for Binary Tree equality", () => {
  it("Test isIdentical using LOT", () => {
    const Node = new BinaryTreeNode<number>(10);
    Node.setLeftChild(new BinaryTreeNode<number>(30));
    Node.setRightChild(new BinaryTreeNode<number>(50));

    if (Node.leftChild && Node.rightChild) {
      Node.leftChild.setLeftChild(new BinaryTreeNode<number>(90));
      Node.leftChild.setRightChild(new BinaryTreeNode<number>(78));
    }

    const Node2 = new BinaryTreeNode<number>(10);
    Node2.setLeftChild(new BinaryTreeNode<number>(30));
    Node2.setRightChild(new BinaryTreeNode<number>(50));

    if (Node2.leftChild && Node2.rightChild) {
      Node2.leftChild.setLeftChild(new BinaryTreeNode<number>(90));
      Node2.leftChild.setRightChild(new BinaryTreeNode<number>(78));
    }
    expect(IsIdentical(Node, Node2)).to.be.true;
  });
  it("Test isIdentical using LOT - negative condition", () => {
    const Node = new BinaryTreeNode<number>(10);
    Node.setLeftChild(new BinaryTreeNode<number>(30));
    Node.setRightChild(new BinaryTreeNode<number>(50));

    if (Node.leftChild && Node.rightChild) {
      Node.leftChild.setLeftChild(new BinaryTreeNode<number>(90));
      Node.leftChild.setRightChild(new BinaryTreeNode<number>(78));
    }

    const Node2 = new BinaryTreeNode<number>(10);
    Node2.setLeftChild(new BinaryTreeNode<number>(30));
    Node2.setRightChild(new BinaryTreeNode<number>(50));

    if (Node2.leftChild && Node2.rightChild) {
      Node2.leftChild.setLeftChild(new BinaryTreeNode<number>(190));
      Node2.leftChild.setRightChild(new BinaryTreeNode<number>(38));
    }
    expect(IsIdentical(Node, Node2)).to.be.false;
  });
});
