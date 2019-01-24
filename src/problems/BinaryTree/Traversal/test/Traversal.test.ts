import { expect } from "chai";
import BinaryTreeNode from "../../BinaryTree";
import DFT from "../DepthFirstTraversal";
import LOT from "../LevelOrderTraversal";

describe("Tests for Traversal", () => {
  type Node = BinaryTreeNode<number>;

  it("Test Depth First Traversal", () => {
    const node: Node = new BinaryTreeNode<number>(10);
    node.setLeftChild(new BinaryTreeNode(9));
    node.setRightChild(new BinaryTreeNode(99));

    if (node && node.leftChild && node.rightChild) {
      node.leftChild.setLeftChild(new BinaryTreeNode<number>(67));
      node.rightChild.setRightChild(new BinaryTreeNode<number>(12));
    }

    let traversedPath: number[] = [node.value];
    DFT(node, (val: number) => {
      traversedPath.push(val);
    });

    expect(traversedPath).to.be.eql([10, 9, 67, 99, 12]);
  });

  it("Test level order traversal", () => {
    const node: Node = new BinaryTreeNode<number>(10);
    node.setLeftChild(new BinaryTreeNode(9));
    node.setRightChild(new BinaryTreeNode(99));

    if (node && node.leftChild && node.rightChild) {
      node.leftChild.setLeftChild(new BinaryTreeNode<number>(67));
      node.leftChild.setRightChild(new BinaryTreeNode<number>(33));
      node.rightChild.setRightChild(new BinaryTreeNode<number>(12));
      node.rightChild.setLeftChild(new BinaryTreeNode<number>(190));
    }
    let traversedPath: number[] = [];
    LOT(node, (val: number) => {
      traversedPath.push(val);
    });

    expect(traversedPath).to.be.eql([10, 9, 99, 67, 33, 190, 12]);
  });
});
