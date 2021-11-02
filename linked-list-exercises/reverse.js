var reverseList = function (head) {
	let size = 0;
	let i = 0;
	let node = head;

	while (node) {
		size++;
		node = node.next;
	}

	node = head;
	let next = null;
	let prev = null;

	while (i < size) {
		next = node.next;
		node.next = prev;
		prev = node;
		node = next;
		// console.log({node, prev, next})

		i++;
	}

	return prev;
};
