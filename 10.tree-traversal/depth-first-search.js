import { BinarySearchTree } from "../9.binary-search-trees/index.js";

class DFSTree extends BinarySearchTree {
  constructor() {
    super();
  }

  DFSPreOrder() {
    const visited = [];
    let rootNode = this.root;

    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(rootNode);
    return visited;
  }

  DFSPostOrder() {
    const visited = [];
    let rootNode = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(rootNode);
    return visited;
  }
  DFSInOrder() {
    const visited = [];
    let rootNode = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(rootNode);
    return visited;
  }
  DFSReversedOrder() {
    const visited = [];
    let rootNode = this.root;

    function traverse(node) {
      if (node.right) traverse(node.right);
      visited.push(node.value);
      if (node.left) traverse(node.left);
    }
    traverse(rootNode);
    return visited;
  }
}

const tree = new DFSTree();
tree.insert(10).insert(15).insert(20).insert(6).insert(8).insert(3);
console.log(tree);
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
console.log(tree.DFSReversedOrder());
