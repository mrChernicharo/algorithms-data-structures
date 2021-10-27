import { BinarySearchTree } from '../9.binary-search-trees/index.js';

const tree = new BinarySearchTree();

[40, 10, 20, 30, 50, 55, 80].forEach(val => tree.insert(val));

console.log(tree.showArrayRepresentation());

function reverseTree(node = { value: null, left: null, right: null }) {
	if (node.value === null) return node;

	let temp = node.left;
	node.left = node.right;
	node.right = temp;

	if (node.left) reverseTree(node.left);
	if (node.right) reverseTree(node.right);

	return node;
}

reverseTree(tree.root);
console.log(tree.showArrayRepresentation());
