class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.inOrderList = [];
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
        }

        if (this.hasKey(value)) {
            return;
        }

        this.insertRecursive(this.root, value);
    };

    hasKeyRecursive(root, value) {
        if (root.key == value) {
            return true;
        }

        if (value < root.key && root.right != null) {
            return this.hasKeyRecursive(root.left, value);
        }

        if (value > root.key && root.right != null) {
            return this.hasKeyRecursive(root.right, value);
        }

        return false;
    }

    hasKey(value) {
        if (this.root == null) {
            return false;
        };
        return this.hasKeyRecursive(this.root, value);
    }

    inOrderRecursion(root) {
        if (root.left != null) {
            this.inOrderRecursion(root.left);
        }
        this.inOrderList.push(root.key);
        if (root.right != null) {
            this.inOrderRecursion(root.right);
        }
    };

    inOrder() {
        this.inOrderList = [];
        if (this.root == null) {
            return this.inOrderList;
        }
        this.inOrderRecursion(this.root);
        return this.inOrderList;
    };

};


// let x = new BST();
// x.Insert(33);
// x.Insert(12);
// x.Insert(34);
// x.Insert(4);
// let y = x.inOrder();
// console.log(y);

