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

// Depth-First uses much less space because it doesn't use a queue, so store nodes in memory
// This is true unless you have a one sided tree, whith nodes to only one direction
//... which is preety rare

// whilist DFSInOrder gives you the elements in their underlying order
// DFSPreOrder might be useful if you want to export the tree in a manner you'd be able to reconstruct it somewhere else
// with PreOrder you have the root coming first, while in InOrder, you loose track of the tree's format,
// note that the root stays somewhere in the middle in InOrder
