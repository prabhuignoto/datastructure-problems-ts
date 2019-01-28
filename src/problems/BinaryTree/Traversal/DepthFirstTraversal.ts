import BinaryTreeNode from "../BinaryTree";

export default function DFT<T>(
  Node: BinaryTreeNode<T>,
  callback: (val: T) => void
): void {
  // do nothing if there are no nodes
  if (!Node) {
    return;
  }

  // Recursive Traverser
  const Traverse = function(Node: BinaryTreeNode<T>) {
    const leftChild = Node.Left;
    const rightChild = Node.Right;

    if (leftChild) {
      callback(<T>leftChild.value);
      Traverse(leftChild);
    }

    if (rightChild) {
      callback(<T>rightChild.value);
      Traverse(rightChild);
    }
  };

  Traverse(Node);
}

