import {expect} from "chai";
import BinaryTreeNode from "../../BinaryTree";
import InorderTraversal from "../InorderTraversal";

describe("Tests for Inorder Traversal", () => {
  it("Test one for Traversal", () => {
    const Node = new BinaryTreeNode<number>(10);
    Node.setLeftChild(new BinaryTreeNode(9));
    Node.setRightChild(new BinaryTreeNode(19));

    (<BinaryTreeNode<number>>Node.leftChild).setLeftChild(
      new BinaryTreeNode(78)
    );
    (<BinaryTreeNode<number>>Node.leftChild).setRightChild(
      new BinaryTreeNode(13)
    );

    let resultArray: number[] = [];
    InorderTraversal(Node, (value: number) => resultArray.push(value));
    expect(resultArray).to.be.eql([78, 9, 13, 10, 19]);
  })
})