
class Node {
    constructor(el) {
        this.left = null;   // 左节点
        this.el = el;
        this.right = null   // 右节点
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null;
    }

    // 向树中插入一个节点
    insert (key) {
        const newNode = new Node(key);

        if(this.root === null) {
            this.root = newNode;
        } else {
        
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        // node 当前节点
        // newNode 最新节点 

        if(newNode.el < node.el) {
            if(node.left === null) node.left = newNode;
            else  this.insertNode(node.left, newNode);

        } else {
            // 如果当前右节点 为空
            if(node.right === null) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }

    // 在树中查找一个节点
    search (key) {

       return this.searchNode(this.root, key)

    }

    searchNode(node, key) {
        if (node === null) return null;

        // 如果 查询元素 小于当前元素 左侧查询
        if (key < node.el) return this.searchNode(node.left, key);
        // 如果大于 右侧查询
        else if (key > node.el) return this.searchNode(node.right, key);
        else return node;
        
    }

    // 通过中序遍历方式遍历树中的所有节点
    inOrderTraverse (callback) {
        this.inOrderTraverseNode(this.root, callback)
    }

    inOrderTraverseNode (node, callback) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.el);
            this.inOrderTraverseNode(node.right, callback);
        }
    };

    // 通过先序遍历方式遍历树中的所有节点
    preOrderTraverse (callback) {
        this.preOrderTraverseNode(this.root, callback)
    }

    // 递归
    preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.el);

            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    // 通过后序遍历方式遍历树中的所有节点
    postOrderTraverse (callback) {
        this.postOrderTraverseNode(this.root, callback)
    }

    postOrderTraverseNode(node, callback) {
        if (node !== null) {
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
            callback(node.el);

        }
    }


    // 返回树中的最小节点
    min () {
        if(this.root === null) return null;

        let node = this.root
        while (node.left) {
            node = node.left;
        }

        return node
    }

    // 返回树中的最大节点
    max () {
        if(this.root === null) return null;

        let node = this.root
        while (node.right) {
            node = node.right;
        }

        return node
    }

    // 从树中移除一个节点
    remove (key) {}
}

const tree = new BinarySearchTree()
tree.insert(5)
tree.insert(4)
tree.insert(6)
tree.insert(3)
tree.insert(7)
tree.preOrderTraverse((res) => {
    console.log(res);
})
console.log(tree)
