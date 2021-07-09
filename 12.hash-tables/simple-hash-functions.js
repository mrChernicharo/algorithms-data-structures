function primedHash(str, arrayLen) {
  let total = 0;
  const WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(str.length, 100); i++) {
    let value = str[i].charCodeAt(0) - 96; // a-z => [1 ...26]
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

function naiveHash(str, arrayLen) {
  let total = 0;
  for (let char of str) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

console.log("---------------------------------------------");
console.log(naiveHash("hi", 100));
console.log(naiveHash("hello", 100));
console.log(naiveHash("hdu9efyew8", 100));
console.log(naiveHash("oeidfhwqaz", 100));
console.log(naiveHash("peralta", 100));
console.log(naiveHash("tulio", 100));
console.log(naiveHash("nfsoaiuasdfew", 100));
console.log(naiveHash("enfante", 100));
console.log("---------------------------------------------");
console.log(primedHash("hi", 100));
console.log(primedHash("hello", 100));
console.log(primedHash("hdu9efyew8", 100));
console.log(primedHash("oeidfhwqaz", 100));
console.log(primedHash("peralta", 100));
console.log(primedHash("tulio", 100));
console.log(primedHash("nfsoaiuasdfew", 100));
console.log(primedHash("enfante", 100));
console.log("---------------------------------------------");

// console.log("a - 96 => ", "a".charCodeAt(0) - 96);
// console.log("b - 96 => ", "b".charCodeAt(0) - 96);
// console.log("c - 96 => ", "c".charCodeAt(0) - 96);
// console.log("z - 96 => ", "z".charCodeAt(0) - 96);
// console.log("A - 96 => ", "A".charCodeAt(0) - 96);
// console.log("B - 96 => ", "B".charCodeAt(0) - 96);
// console.log("C - 96 => ", "C".charCodeAt(0) - 96);
// console.log("Z - 96 => ", "Z".charCodeAt(0) - 96);
// console.log("0 - 96 => ", "0".charCodeAt(0) - 96);
// console.log("1 - 96 => ", "1".charCodeAt(0) - 96);
// console.log("9 - 96 => ", "9".charCodeAt(0) - 96);
// console.log("À - 96 => ", "À".charCodeAt(0) - 96);
// console.log("ÿ - 96 => ", "ÿ".charCodeAt(0) - 96);
// console.log("[ - 96 => ", "[".charCodeAt(0) - 96);
// console.log("! - 96 => ", "!".charCodeAt(0) - 96);
// console.log("_ - 96 => ", "_".charCodeAt(0) - 96);

// console.log("a => ", "a".charCodeAt(0));
// console.log("b => ", "b".charCodeAt(0));
// console.log("c => ", "c".charCodeAt(0));
// console.log("z => ", "z".charCodeAt(0));
// console.log("A => ", "A".charCodeAt(0));
// console.log("B => ", "B".charCodeAt(0));
// console.log("C => ", "C".charCodeAt(0));
// console.log("Z => ", "Z".charCodeAt(0));
// console.log("0 => ", "0".charCodeAt(0));
// console.log("1 => ", "1".charCodeAt(0));
// console.log("9 => ", "9".charCodeAt(0));
// console.log("À => ", "À".charCodeAt(0));
// console.log("ÿ => ", "ÿ".charCodeAt(0));
// console.log("[ => ", "[".charCodeAt(0));
// console.log("! => ", "!".charCodeAt(0));
// console.log("_ => ", "_".charCodeAt(0));
