import {expect} from "chai";
import BinaryTreeNode from "../../BinaryTree";
import CountLeaves from "..";

describe("Tests for Counting leaves in a Binary Tree", () => {

    it("Check if count leaves calculates as expected", () => {
        const Node: BinaryTreeNode<number> | null = new BinaryTreeNode<number>(10);
        Node.setLeftChild(new BinaryTreeNode(9));
        Node.setRightChild(new BinaryTreeNode(10));

        expect(CountLeaves(Node)).to.be.equal(2);
    });

    it("Check if count leaves calculates as expected - 2", () => {
        const Node: BinaryTreeNode<number> | null = new BinaryTreeNode<number>(10);
        Node.setLeftChild(new BinaryTreeNode(9));
        Node.setRightChild(new BinaryTreeNode(11));

        const leftNode: BinaryTreeNode<number> | null = Node.leftChild;

        if(leftNode) {
            leftNode.setLeftChild(new BinaryTreeNode(99));
            leftNode.setRightChild(new BinaryTreeNode(78));
        }

        expect(CountLeaves(Node)).to.be.equal(3);
    });
})