// Breadth-first-search might be used to traverse different kinds of trees
// so, it's not limited to binary search trees

//
//           10
//      6          15
//   3     8            20
//
//  result: [10, 6, 15, 3, 8, 20]
//
// In order to implement a breadth-first-search, we need a queue to keep track of
// what we should visit next

import { BinarySearchTree } from "../9.binary-search-trees/index.js";

class BFSTree extends BinarySearchTree {
  constructor() {
    super();
  }

  BFS() {
    const queue = [],
      visited = [];

    let node = this.root;

    // console.log({ queue, visited, root: this.root });
    if (!node) return undefined;

    queue.push(node);

    while (queue.length) {
      //   console.log({ queue, visited, node });

      node = queue.shift();
      visited.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }
}

const tree = new BFSTree();
// tree
//   .insert(20)
//   .insert(40)
//   .insert(10)
//   .insert(4)
//   .insert(16)
//   .insert(42)
//   .insert(30);
// console.log(tree);
tree.insert(10).insert(15).insert(6).insert(3).insert(20).insert(8);
console.log(tree.BFS());
