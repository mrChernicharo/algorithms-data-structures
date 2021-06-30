// A FIFO data structure

// Practical uses:
// - online gaming queues
// - background tasks
// - uploading resources
// - printers
// - task processing

// next here points to the node back in the line
// and not to the node in front

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (!this.first) return undefined;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  print() {
    const arr = [];
    let i = 0;
    let curr = this.first;
    while (i < this.size) {
      arr.push(curr);
      curr = curr.next;
      i++;
    }
    console.log(arr);
  }
}

const q = new Queue();

q.enqueue(0).enqueue(1).enqueue(2).enqueue(3).enqueue(4);
q.print();
q.dequeue();
q.dequeue();
q.dequeue();
q.print();

// Big O
// INSERTION / REMOVAL - O(1)
// SEARCH / ACCESS (who cares? searching and accessing is not the objective here) - O(N)
