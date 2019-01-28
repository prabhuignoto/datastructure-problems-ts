import BinaryTreeNode from "../BinaryTree";

export default function InorderTraversal<T>(
  Node: BinaryTreeNode<T>,
  callback: (value: T) => void
) {
  if (!Node) {
    return;
  }

  if (Node.leftChild) {
    InorderTraversal(Node.leftChild, callback);
  }

  callback(<T>Node.value);

  if (Node.rightChild) {
    InorderTraversal(Node.rightChild, callback);
  }
}
