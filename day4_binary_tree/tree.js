class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    print() {
        console.log("Binary Search Tree:");
        this.printNode(this.root, "", true);
    }

    printNode(node, prefix, isTail) {
        if (node !== null) {
            console.log(`${prefix}${isTail ? "└── " : "├── "}${node.data}`);
            this.printNode(node.right, `${prefix}${isTail ? "    " : "│   "}`, false);
            this.printNode(node.left, `${prefix}${isTail ? "    " : "│   "}`, true);
        }
    }

    insert(data) {
        var newNode = new Node(data);

        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    find(target, node = this.root) {
        if (node === null) {
            console.log("Value not found");
            return null;
        }

        if (target === node.data) {
            console.log("Value found:");
            console.log(node)
            return node.data;
        } else if (target < node.data) {
            return this.find(target, node.left);
        } else {
            return this.find(target, node.right);
        }
    }
    

}

myTree = new BinarySearchTree

myTree.insert(40)
myTree.insert(30)
myTree.insert(50)
myTree.insert(20)
myTree.insert(70)
myTree.insert(80)
myTree.insert(25)
myTree.insert(33)
myTree.insert(45)
myTree.insert(11)
myTree.insert(1)
myTree.insert(9)

myTree.print()

myTree.find(11)