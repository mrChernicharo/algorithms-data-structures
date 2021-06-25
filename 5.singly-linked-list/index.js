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
}

const list = new SinglyLinkedList();

// list.push("hi");
// list.push("hola");
// list.push(45);
// list.push(80);
// console.log("------------------------------------------");
// console.log({ list });
// console.log("---------------- POP! -------------------");
// console.log(list.pop());
// console.log("------------------------------------------");
// console.log({ list });
// console.log("---------------- POP! -------------------");
// console.log(list.pop());
// console.log("------------------------------------------");
// console.log({ list });
// console.log("---------------- POP! -------------------");
// console.log(list.pop());
// console.log("------------------------------------------");
// console.log({ list });
// console.log("---------------- POP! -------------------");
// console.log(list.pop());
// console.log("------------------------------------------");
// console.log({ list });
// console.log("---------------- SHIFT! -------------------");
// console.log(list.shift());
// console.log("------------------------------------------");
// console.log({ list });
// console.log("---------------- SHIFT! -------------------");
// console.log(list.shift());
// console.log("------------------------------------------");
// console.log({ list });
// console.log("---------------- SHIFT! -------------------");
// console.log(list.shift());
// console.log("------------------------------------------");
// console.log({ list });
// console.log("---------------- SHIFT! -------------------");
// console.log(list.shift());
// console.log("------------------------------------------");
// console.log({ list });
// console.log("---------------- SHIFT! -------------------");
// console.log(list.shift());
// console.log("------------------------------------------");
// console.log({ list });

console.log("------------------------------------------");
console.log({ list });
console.log("---------------- PUSH! ------------------");
console.log(list.push(80));
console.log("------------------------------------------");
console.log({ list });
console.log("---------------- UNSHIFT! -------------------");
console.log(list.unshift(1));
console.log("------------------------------------------");
console.log({ list });
console.log("---------------- UNSHIFT! -------------------");
console.log(list.unshift(2));

console.log("------------------------------------------");
console.log({ list });
console.log("---------------- POP! -------------------");
console.log(list.pop());
console.log("------------------------------------------");
console.log({ list });
console.log("---------------- SHIFT! -------------------");
console.log(list.shift());
console.log("------------------------------------------");
console.log({ list });

console.log("---------------- SHIFT! -------------------");
console.log(list.shift());
console.log("------------------------------------------");
console.log({ list });
console.log("---------------- POP! -------------------");
console.log(list.pop());
console.log("------------------------------------------");
console.log({ list });
