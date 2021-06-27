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
    const node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return node.val;
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
    return poping.val;
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
    return node.val;
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
    return shifting.val;
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

    return updating.val;
  }

  insert(val, pos) {}
  remove(pos) {}

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

list.unshift(32);
list.unshift("ha");
list.unshift(789);
list.push("joe");
list.print();
console.log(list.set(0, "mary"));
console.log(list);
// list.print();
