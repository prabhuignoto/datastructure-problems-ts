import BinaryTreeNode from "../BinaryTree";
import Queue from "../../Linkedlist/Queue/queue";


export default function CountLeaves<T>(Node: BinaryTreeNode<T>): number {
    let leavesCount = 0;
    // if no root node return 0
    if(!Node) {
        return 0;
    }

    // if both left and right childs are not available then return 1
    if(!Node.leftChild && !Node.rightChild) {
        return 1;
    }

    const queue = new Queue<BinaryTreeNode<T>>();
    queue.enqueue(Node);

    // iterate as long as the queue has elements in it.
    while(queue.hasElements) {
        let node: BinaryTreeNode<T> | null = queue.dequeue();

        if(node && !node.leftChild && !node.rightChild) {
            leavesCount ++;
        }
        if(node && node.leftChild) {
            queue.enqueue(node.leftChild);
        }
        if(node && node.rightChild) {
            queue.enqueue(node.rightChild);
        }
    }

    return leavesCount;
}