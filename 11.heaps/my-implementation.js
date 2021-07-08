// Heaps are also trees and there's a bunch of them
// We'll be focusing in binary heaps, more specifically max and min heaps

//         41
//     38      39
//   12  21  25   32
//

// Heaps are as compact as possible, in contrast with binary trees, where you
// can have one-sided depressing trees
// In a MaxBinaryHeap, the parent nodes are always greater than its children
// * but there's no guarantees between siblings
//
//            100
//       19          36
//    17    3     25     1   <-- look that there's no relation < or > between siblings
//  2    7

// And this is a minBinaryHeap
// Where parents are always smaller than children
//
//               1
//          12        7
//       34    21  22
//

// We can store heaps in arrays, by the way!

//          100----|
//            L    R
//             \    \
//              19   36------\---\
//               |---R-----\  L   R
//               |          |  \   \
//                \-L--17   12  25  5
//                      \    \-----------------ETC..
//                       \---------R--------\
//                        --------L------ 9  15   6  11   13  8   1   4
//
//
//         [ 100, 19, 36, 17, 12, 25,  5,  9, 15,  6, 11, 13,  8,  1,  4 ]
// indexes     0   1   2   3   4   5   6   7   8   9  10  11  12  13  14

// ...so, for any index n,
//the left children is stored at 2n + 1
// and the right children is at 2n + 2

// EX: 19 -> index 1   left 17 -> index 3 and right 12 index 4
//  EX: 17 -> index 3   left 9 -> index 7 and right 15 index 8
//  EX: 12 -> index 4   left 6 -> index 9 and right 11 index 10

// and a child at index n has its parent at index Math.floor( (n-1) / 2 )

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    // pull max out
    const max = this.values[0];

    // place last in its place
    this.values[0] = this.values[this.values.length - 1];

    this.values.pop();

    this.sinkDown();
    console.log(this.values);

    return max;
  }

  sinkDown() {
    let idx = 0;
    const finalIdx = this.values.length - 1;
    while (idx < finalIdx) {
      let element = this.values[idx];

      let leftChildIdx = idx * 2 + 1 < finalIdx ? idx * 2 + 1 : -1;
      let rightChildIdx = idx * 2 + 2 < finalIdx ? idx * 2 + 2 : -1;

      let child1 = leftChildIdx >= 0 ? this.values[leftChildIdx] : null;
      let child2 = rightChildIdx >= 0 ? this.values[rightChildIdx] : null;
      let maxChild = Math.max(child1, child2);

      console.log({ element, idx, leftChildIdx, rightChildIdx, maxChild });

      if (element >= maxChild) break;

      this.values[idx] = maxChild;

      if (maxChild === child1) {
        this.values[leftChildIdx] = element;
        idx = leftChildIdx;
      } else {
        this.values[rightChildIdx] = element;
        idx = rightChildIdx;
      }
      console.log({ element, idx, leftChildIdx, rightChildIdx, maxChild });
    }
  }
}

const heap = new MaxBinaryHeap();
heap
  .insert(10)
  .insert(20)
  .insert(100)
  .insert(33)
  .insert(87)
  .insert(45)
  .insert(4)
  .insert(21)
  .insert(203)
  .insert(-3)
  .insert(101);
console.log(heap);

function swap(arr, value) {
  let valueIdx = arr.length;
  let parentValue;
  let parentIdx = Math.floor((valueIdx - 1) / 2);
  //   console.log({ valueIdx, parentIdx, arr });
  while (value > arr[parentIdx]) {
    parentValue = arr[parentIdx];
    arr[parentIdx] = value;
    arr[valueIdx] = parentValue;
    valueIdx = parentIdx;
    parentIdx = Math.floor((valueIdx - 1) / 2);

    // console.log({ valueIdx, parentIdx, arr });
  }
  return arr;
}

const myArr = [101, 100, 33, 20, 10, 4];

const myArr2 = [203, 101, 87, 100, 33, 45, 21, 20, -23, 4, 9, -3];

// [60, 43, 50, 32, 36, 29, 41]

// console.log(swap(myArr, 87));
// console.log(swap(myArr2, 108));
console.log(swap(myArr, 10));
// console.log(swap(myArr, 60));
