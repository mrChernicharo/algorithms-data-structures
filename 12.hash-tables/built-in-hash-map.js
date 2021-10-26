console.log('************** THE BASICS ****************');
const hash = new Map();

// add new items with Map.set(key, value), get their values with Map.get(key)
// Maps keys are unsorted, and different from regular Objects, their keys can be numbers, objects and even functions

hash.set(-1, 'hola');
hash.set(0, 'hello');
hash.set(2, 'oi');
console.log(hash.get(0));
console.log(hash.get(-1));

const obj = { language: 'french' };
hash.set(obj, 'salut');

console.log(hash.get(2));
console.log(hash.get(obj));
console.log(hash.get({ language: 'french' })); // wouldn't work because objects are refernced types

console.log(hash);

hash.delete(0); // delete with, guess what ... Map.delete(key)!
console.log(hash.get(0)); // undefined

console.log(hash.has(-1)); // true
console.log(hash.has(4)); // false

// ********************************************
console.log('************** ITERATING ****************');

for (let key of hash.keys()) {
	console.log({ key });
}

for (let value of hash.values()) {
	console.log({ value });
}

for (let [key, value] of hash.entries()) {
	console.log({ key, value });
}

hash.forEach((value, key, map) => {
	console.log(key, ':', value);
	console.log(map[key]); // doesn't work like this!
});

console.log('************** CLONING ****************');

const clone = new Map(hash);

console.log(clone);

console.log('************** MERGING ****************');

const first = new Map([
	[1, 'one'],
	[2, 'two'],
	[3, 'three'],
]);

const second = new Map([
	[1, 'uno'],
	[2, 'dos'],
]);

// When merging two maps the last repeated key wins.
// Spread operator essentially converts a Map to an Array
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three

const merged2 = new Map([...first, ...second, [1, 'um']]);

console.log(merged2.get(1)); // um
console.log(merged2.get(2)); // dos
console.log(merged2.get(3)); // three
