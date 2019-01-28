import { expect } from "chai";
import BinaryTreeNode from "../../BinaryTree";
import PreOrderTraverse from "../PreOrderTraversal";

describe("Tests for Pre-order Traversal", () => {
  it("Test Traversal One", () => {
    const Node: BinaryTreeNode<number> = new BinaryTreeNode(9);
    Node.setLeftChild(new BinaryTreeNode(23));
    Node.setRightChild(new BinaryTreeNode(3));

    (<BinaryTreeNode<number>>Node.leftChild).setLeftChild(
      new BinaryTreeNode(89)
    );
    (<BinaryTreeNode<number>>Node.leftChild).setRightChild(
      new BinaryTreeNode(54)
    );

    let resultArray: number[] = [];
    PreOrderTraverse<number>(Node, (val: number) => resultArray.push(val));
    expect(resultArray).to.be.eql([9, 23, 89, 54, 3]);
  });
});
