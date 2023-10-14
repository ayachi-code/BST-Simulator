class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
}

class BST {
    constructor() {
        this.root = null;
    }

    insertRecursive(root, value) {
        if (value < root.key && root.left != null) {
            this.insertRecursive(root.left, value);
        }

        if (value > root.key && root.right != null) {
            this.insertRecursive(root.right, value);
        }

        if (value < root.key && root.left == null) {
            root.left = new Node(value);
            return;
        }

        if (value > root.key && root.right == null) {
            root.right = new Node(value);
            return;
        }
    }

    Insert(value) {
        if (this.root == null) {
            let newNode = new Node(value);
            this.root = newNode;
            return;
        };
        this.insertRecursive(this.root, value);
    };

    hasKeyRecursive() {
        
    }

    hasKey(value) {
        if (this.root == null) {
            return false;
        };
        return hasKeyRecursive(this.root, value);
    }



};


let x = new BST();
x.Insert(33);
x.Insert(12);
x.Insert(34);
x.Insert(4);

console.log(x);