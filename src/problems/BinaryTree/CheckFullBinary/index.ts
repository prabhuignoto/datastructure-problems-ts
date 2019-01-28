import BinaryTreeNode from "../BinaryTree";

export default function isFullBinary<T>(Node: BinaryTreeNode<T>): boolean {
  if (!Node) {
    return true;
  }

  if (!Node.leftChild && !Node.rightChild) {
    return true;
  }

  if (Node.leftChild && Node.rightChild) {
    return isFullBinary(Node.leftChild) && isFullBinary(Node.rightChild);
  }

  return false;
}
