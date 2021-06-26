class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    if (!val && val !== 0) return new Error("must pass in a value");

    const node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return node;
  }

  pop() {
    if (!this.head) return undefined;

    if (this.length === 1) {
      let curr = this.head;
      [this.head, this.tail] = [null, null];

      this.length--;
      return curr;
      //
    }

    //
    else {
      let current = this.head;
      let prev = null;

      while (current.next) {
        prev = current;
        current = current.next;
      }

      prev.next = null;
      this.tail = prev;

      this.length--;
      return current;
    }
  }

  shift() {
    if (!this.head) return undefined;

    let newHead = this.head.next;
    let shiftingEl = this.head;
    // this.head.next = null;
    this.head = newHead;

    this.length--;

    if (!this.length) this.tail = null;

    return shiftingEl;
  }

  unshift(val) {
    if (!val && val !== 0) return new Error("must pass in a value");

    if (this.head) {
      const node = new Node(val);
      const prevHead = this.head;
      this.head = node;
      this.head.next = prevHead;

      if (this.length === 1) this.tail = prevHead;

      this.length++;
    } else {
      this.push(val);
    }
    return this.head;
  }

  get(num) {
    if (num < 0 || num >= this.length) return undefined;
    if (num === 0) return this.head;

    let curr = this.head;
    let count = 0;
    while (count <= num) {
      if (count === num) return curr;
      curr = curr.next;
      count++;
    }
  }

  set(val, index) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return foundNode;
    }

    return undefined;
  }

  print() {
    const arr = [];
    let current = this.head;

    for (let i = 0; i < this.length; i++) {
      if (i === 0 || i === this.length - 1) arr.push(`|${current.val}|`);
      else {
        arr.push(current.val);
      }

      current = current.next;
    }

    console.log(arr);
  }

  insert(val, index) {
    if (index < 0 || index >= this.length)
      return new Error("index doesn't exist: Couldn't insert value to list");

    if (index === 0) return this.unshift(val);
    if (index === this.length - 1) return this.push(val);

    const newNode = new Node(val);
    const nextNode = this.get(index);
    const prevNode = this.get(index - 1);
    prevNode.next = newNode;
    newNode.next = nextNode;

    // console.log({ prevNode, nextNode, newNode });

    this.length++;
    return newNode;
  }
  remove(index) {
    if (index < 0 || index >= this.length)
      return new Error("index doesn't exist: Couldn't remove value to list");

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = nextNode;

    this.length--;

    return removedNode;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    // node => 0

    for (let i = 0; i < this.length; i++) {
      next = node.next; // next =>    1 => 2  => 3
      node.next = prev; // prev => null => 1 => 2
      prev = node; // prev =>         1 => 2 => 3
      node = next; // node =>         0 => 1 => 2
    }

    return this;
  }
}

const list = new SinglyLinkedList();

list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.print();
list.reverse();
list.print();
