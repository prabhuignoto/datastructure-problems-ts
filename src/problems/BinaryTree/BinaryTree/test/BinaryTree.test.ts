import { expect } from "chai";
import BinaryTreeNode from "..";

describe("Tests for BinaryTree", () => {
  it("Check BinaryTree creation", () => {
    const Node = new BinaryTreeNode<number>(10);
    expect(Node.value).to.be.equal(10);
  });

  it("Check if leftchild and rightChild initialization works", () => {
    const Node = new BinaryTreeNode<number>(10);
    Node.setLeftChild(new BinaryTreeNode<number>(30));
    Node.setRightChild(new BinaryTreeNode<number>(50));
    if (Node.leftChild) {
      expect(Node.leftChild.value).to.be.equal(30);
    }
    if (Node.rightChild) {
      expect(Node.rightChild.value).to.be.equal(50);
    }
  });

  it("Check if remove child works", () => {
    const Node = new BinaryTreeNode<number>(10);
    Node.setLeftChild(new BinaryTreeNode<number>(30));
    Node.setRightChild(new BinaryTreeNode<number>(50));

    if (Node.leftChild && Node.rightChild) {
      Node.removeChild(Node.leftChild);
      expect(Node.leftChild).to.be.null;
      Node.removeChild(Node.rightChild);
      expect(Node.rightChild).to.be.null;
    }
  });

  it("Check if replace child works", () => {
    const Node = new BinaryTreeNode<number>(10);
    Node.setLeftChild(new BinaryTreeNode<number>(30));
    Node.setRightChild(new BinaryTreeNode<number>(50));

    if (Node.leftChild && Node.rightChild) {
      Node.replaceChild(Node.leftChild, new BinaryTreeNode<number>(90));
      expect(Node.leftChild.value).to.be.equal(90);
      Node.replaceChild(Node.rightChild, new BinaryTreeNode<number>(78));
      expect(Node.rightChild.value).to.be.equal(78);
    }
  });

  it("Check if copy node works", () => {
    const Node = new BinaryTreeNode<number>(10);
    Node.setLeftChild(new BinaryTreeNode<number>(30));
    Node.setRightChild(new BinaryTreeNode<number>(50));

    if(Node.leftChild && Node.rightChild) {
      BinaryTreeNode.Copy(Node.leftChild, Node.rightChild)
      expect(Node.rightChild.value).to.be.equal(Node.leftChild.value);
    }

  });
});
