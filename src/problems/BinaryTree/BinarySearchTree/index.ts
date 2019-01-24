import BinaryTreeNode from "../BinaryTree";

export default class BinarySearchNode<U> extends BinaryTreeNode<U> {
  constructor(value: U) {
    super(value);
  }

  insert(value: U): void {
    if (!this.value) {
      return;
    }

    if (value < this.value) {
      if (this.leftChild) {
        return (<BinarySearchNode<U>>this.leftChild).insert(value);
      }
      const Node = new BinarySearchNode(value);
      this.setLeftChild(Node);
    }
    if (value > this.value) {
      if (this.rightChild) {
        return (<BinarySearchNode<U>>this.rightChild).insert(value);
      }
      const Node = new BinarySearchNode(value);
      this.setRightChild(Node);
    }
  }

  find(value: U): BinarySearchNode<U> | null {
    if (!this.value) {
      return null;
    }

    if (value === this.value) {
      return this;
    } else if (value > this.value && this.rightChild) {
      return (<BinarySearchNode<U>>this.rightChild).find(value);
    } else if (value < this.value && this.leftChild) {
      return (<BinarySearchNode<U>>this.leftChild).find(value);
    }
    return null;
  }

  findMin(): BinarySearchNode<U> {
    if (!this.leftChild) {
      return this;
    }
    return (<BinarySearchNode<U>>this.leftChild).findMin();
  }

  delete(value: U): void {
    const nodeToDelete = this.find(value);
    if (!nodeToDelete) {
      return;
    }
    const { parent } = nodeToDelete;

    if (!nodeToDelete.leftChild && !nodeToDelete.rightChild) {
      if (parent) {
        (<BinaryTreeNode<U>>parent).removeChild(nodeToDelete);
      } else {
        nodeToDelete.setValue(undefined);
      }
    } else if (nodeToDelete.leftChild && nodeToDelete.rightChild) {
      const nextMin: BinarySearchNode<U> | null = (<BinarySearchNode<U>>(
        nodeToDelete.rightChild
      )).findMin();
      if (nextMin !== nodeToDelete.rightChild) {
        this.delete(<U>nextMin.value);
        nodeToDelete.setValue(nextMin.value);
      } else {
        nodeToDelete.setValue(nodeToDelete.rightChild.value);
        if (nextMin.rightChild) {
          nodeToDelete.setRightChild(nextMin.rightChild);
        }
      }
    } else {
      const childNode = nodeToDelete.leftChild || nodeToDelete.rightChild;

      if (parent && childNode) {
        parent.replaceChild(nodeToDelete, childNode);
      } else {
        childNode && BinaryTreeNode.Copy(childNode, nodeToDelete);
      }
    }
  }
}
