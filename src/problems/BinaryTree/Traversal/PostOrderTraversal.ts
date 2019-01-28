import BinaryTreeNode from "../BinaryTree";

export default function PostOrderTraversal<T>(Node: BinaryTreeNode<T>, callback: (value: T) => void) {

  // if node is null return
  if(!Node) {
    return;
  }

  if(Node.leftChild) {
    PostOrderTraversal(Node.leftChild, callback);
  }

  if(Node.rightChild) {
    PostOrderTraversal(Node.rightChild, callback);
  }

  callback(<T>Node.value);
} 