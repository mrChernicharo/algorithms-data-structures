/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	//count the size of linked list
	let current = head;
	let size = 1;

	while (current.next !== null) {
		size += 1;
		current = current.next;
	}

	//edge case
	if (n === 1 && size === 1) return null;

	let indexToRemove = size - n + 1;

	//if head needs to be removed
	if (indexToRemove === 1) {
		head = head.next;
		return head;
	}
	//remove element
	current = head;
	let idx = 1;
	while (current.next !== null) {
		if (idx + 1 === indexToRemove) {
			current.next = current.next.next;
			break;
		}
		current = current.next;
		idx += 1;
	}

	return head;
};
