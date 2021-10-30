// whatever

export class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? null : val;
		this.next = next === undefined ? null : next;
	}

	insert(val) {
		if (this.val === null) {
			this.val = val;
		} else {
			this.next = new ListNode(val);
		}
		return this.next;
	}
}

export function createLinkedListFromArray(array) {}

const linkedList = new ListNode(0);

linkedList.insert(1).insert(2).insert(3);
console.log(linkedList);

const linkedList2 = new ListNode('a');

linkedList2.insert('b').insert('c').insert('d');
console.log(linkedList2);

console.log(createLinkedListFromArray(['x', 'y', 'z']));
