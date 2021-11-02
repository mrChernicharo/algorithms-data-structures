function hasPath(graph, source, destination) {
	if (source === destination) return true;

	for (let neighbor of graph[source]) {
		if (hasPath(graph, neighbor, destination) === true) {
			return true;
		}
	}

	return false;
}

const myGraph = {
	a: ['b', 'c'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: [],
	g: [],
};

console.log(hasPath(myGraph, 'a', 'e'));
console.log(hasPath(myGraph, 'a', 'g'));
