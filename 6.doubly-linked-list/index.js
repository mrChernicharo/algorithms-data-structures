class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;

    const poping = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
    return this;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.length) return undefined;

    const shifting = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return this;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) return undefined;
    if (pos === 0) return this.head;

    let i = 0;
    let curr = this.head;
    while (i < pos) {
      curr = curr.next;
      i++;
    }

    return curr;
  }

  set(pos, val) {
    if (pos < 0 || pos >= this.length) return undefined;

    const updating = this.get(pos);
    updating.val = val;
    if (pos > 0) {
      updating.prev = this.get(pos - 1);
      //   updating.prev.next = updating;
    }
    if (pos < this.length - 1) {
      updating.next.prev = updating;
      //   updating.next = this.get(pos + 1);
    }

    return this;
  }

  insert(pos, val) {
    if (pos < 0 || pos > this.length) return undefined;

    if (pos === 0) return this.unshift(val);
    if (pos === this.length) return this.push(val);

    const newNode = new Node(val);

    let nextnode = this.head;
    let i = 0;
    while (i < pos) {
      nextnode = nextnode.next;
      i++;
    }

    const prevnode = nextnode.prev;

    newNode.prev = prevnode;
    prevnode.next = newNode;

    nextnode.prev = newNode;
    newNode.next = nextnode;

    this.length++;
    return this;
  }
  remove(pos) {
    if (pos < 0 || pos >= this.length) return undefined;
    if (pos === 0) return this.shift();
    if (pos === this.length - 1) return this.pop();

    let removenode = this.head;
    let i = 0;
    while (i < pos) {
      removenode = removenode.next;
      i++;
    }

    let prevnode = removenode.prev;
    let nextnode = removenode.next;

    prevnode.next = nextnode;
    nextnode.prev = prevnode;

    this.length--;

    return this;
  }

  reverse() {
    let i = 0;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    while (i < this.length) {
      let copy = { ...current };
      // let copy = new Node(current.val);
      // copy.next = current.next;
      // copy.prev = current.prev;

      current.next = copy.prev;
      current.prev = copy.next;
      current = copy.next;
      i++;
    }

    return this;
  }

  print() {
    let current = this.head;
    const arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push({
        val: current.val,
        next: current.next,
        prev: current.prev,
      });
      current = current.next;
    }
    const printArr = arr.map((d, i) => {
      let node = {
        val: d.val,
        prev: d.prev?.val ?? null,
        next: d.next?.val ?? null,
      };
      if (i === 0) node.head = true;
      if (i === arr.length - 1) node.tail = true;
      return node;
    });
    console.log(printArr);
  }
}

const list = new DoublyLinkedList();

list.push(0).push(1).push(2).push(3);
// console.log(list.set(0, ));
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.get(3));
list.insert(4, "killer");
list.print();
list.reverse();
list.print();
