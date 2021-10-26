class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}
	set(key, value) {
		let index = this._hash(key);

		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
	}
	get(key) {
		let index = this._hash(key);
		const bucket = this.keyMap[index];

		if (bucket) {
			for (let i = 0; i < bucket.length; i++) {
				if (bucket[i][0] === key) {
					return bucket[i][1];
				}
			}
		}
		return undefined;
	}

	// retorns unique values in the keyMap
	values() {
		const values = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (this.keyMap[i][j]) {
						if (!values.includes(this.keyMap[i][j][1])) {
							values.push(this.keyMap[i][j][1]);
						}
					}
				}
			}
		}
		return values;
	}
	keys() {
		const keys = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (this.keyMap[i][j]) {
						if (!keys.includes(this.keyMap[i][j][0])) {
							keys.push(this.keyMap[i][j][0]);
						}
					}
				}
			}
		}
		return keys;
	}
	print() {
		console.log(this.keyMap);
	}
}

let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
ht.print();

console.log(ht.get('plum'));
console.log(ht.values());
console.log(ht.keys());

// Insertion / Deletion / Access O(1)

// - Hash Tables are collections of key/value pairs
// - they can find values quickly in a key
// - they can add key/values
// - they store data in a large array, using a hashing function

// - good hash must be fast, distribute keys uniformly and be deterministic

// - separate chaining and linear probing are two strategies to deal
// with collisions (two keys that hash to the same index)
