import { expect } from "chai";
import BinaryTreeNode from "../../BinaryTree";
import PostOrderTraversal from "../PostOrderTraversal";

describe("Tests for Post-order Traversal", () => {
  it("Test for Post-Order Traversal", () => {
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
    PostOrderTraversal(Node, (value: number) => resultArray.push(value));
    expect(resultArray).to.be.eql([78, 13, 9, 19, 10]);
  });
});
