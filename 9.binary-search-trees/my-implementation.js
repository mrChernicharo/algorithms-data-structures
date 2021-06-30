// three != binary tree != binary search tree
// trees consists of nodes hierarquicaly positioned

// linked lists can be considered kinds of trees that branch only into single nodes
// but tipically in trees, branches establish connections between more than one node

// ROOT - top node
// CHILD - node directly connected to another node when moving away from the root
// PARENT - the converse notion of a child
// SIBLINGS - a group of nodes with the same parent
// LEAF - node with no children
// EDGE - connection between two nodes

// examples
// HTML DOM
// Network routing
// AI -> decision trees
// Computer File systems
// JSON
//

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      // console.log(value + ": assign root");
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (newNode.value === current.value) {
        // console.log(value + ": equal");
        return this;
      }

      if (newNode.value < current.value) {
        // console.log(value + ": smaller");

        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return this;
        }
      }

      if (newNode.value > current.value) {
        // console.log(value + ": greater");

        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      }
    }
  }

  search(value) {
    if (this.root === null) return null;

    let current = this.root;

    while (true) {
      // console.log({ current, value: current.value, target: value });

      if (value === current.value) return current;

      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }
      if (current === null) return null;
    }
  }

  contains(value) {
    if (this.root === null) return false;

    let current = this.root;

    while (true) {
      // console.log({ current, value: current.value, target: value });

      if (value === current.value) return true;

      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }
      if (current === null) return false;
    }
  }
}
const tree = new BinarySearchTree();
tree.insert(10).insert(5).insert(18).insert(11).insert(2).insert(6);

// console.log(tree);
console.log(tree.search(11));
// console.log(tree.search(13));
// console.log(tree.search(6));

// INSERTION / SEARCHING => O(log n)
//
