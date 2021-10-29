import { SinglyLinkedList, Node } from '../5.singly-linked-list/index.js';

function addTwoNumbers(l1, l2) {
	const spreadValsIntoArr = list => {
		const arr = [];
		if (list.head === null) return arr;

		let curr = list.head;
		while (curr !== null) {
			arr.push(curr.val);

			curr = curr.next || null;
		}

		return arr;
	};

	const arr1 = spreadValsIntoArr(l1);
	const arr2 = spreadValsIntoArr(l2);

	const getNumFromArr = arr => Number(arr.join(''));

	const num1 = getNumFromArr(arr1);
	const num2 = getNumFromArr(arr2);

	const sum = num1 + num2;

	const spreadDigitsIntoArr = num =>
		String(num)
			.split('')
			.map(ch => Number(ch));

	const outputArr = spreadDigitsIntoArr(sum);

	const newHead = new Node(outputArr[0]);
	const returnList = new SinglyLinkedList();
	returnList.unshift(newHead);
	let current = newHead;
	for (let i = 1; i < outputArr.length; i++) {
		current = new Node(outputArr[i]);
		returnList.unshift(current);

		current = current.next;
	}

	return returnList;
}

const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList();
[2, 4, 3, 1].forEach(val => list1.push(val));
[5, 6, 4, 9].forEach(val => list2.push(val));

const result = addTwoNumbers(list1, list2);

console.log(result);
