import BinaryTreeNode from "../BinaryTree";

export default function PreOrderTraverse<T>(
  Node: BinaryTreeNode<T>,
  callback: (value: T) => void
) {
  if (!Node) {
    return;
  }

  if (Node.value) {
    callback(Node.value);
  }

  if (Node.leftChild) {
    PreOrderTraverse(Node.leftChild, callback);
  }

  if (Node.rightChild) {
    PreOrderTraverse(Node.rightChild, callback);
  }
}
