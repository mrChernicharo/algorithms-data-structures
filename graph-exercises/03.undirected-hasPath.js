const myEdges = [
	['a', 'b'],
	['a', 'd'],
	['b', 'c'],
	['c', 'd'],
	['a', 'e'],
	['e', 'f'],
	['g', 'h'],
];

// turn edges list into an adjacency list
const buildGraph = edges => {
	const adjList = {};

	for (let edge of edges) {
		const [a, b] = edge;

		if (!(a in adjList)) adjList[a] = [];
		if (!(b in adjList)) adjList[b] = [];

		adjList[a].push(b);
		adjList[b].push(a);
	}

	return adjList;
};

// the actual algo: initializes our guard Set for visited nodes and calls the recursive depthFistSearch
const hasPath = (edges, src, dst) => {
	const visited = new Set();
	const graph = buildGraph(edges);

	return depthFirstSearch(graph, src, dst, visited);
};

const depthFirstSearch = (graph, src, dst, visited) => {
	if (src === dst) return true;
	if (visited.has(src)) return false; // guarding against cycles

	visited.add(src);

	for (let neighbor of graph[src]) {
		if (depthFirstSearch(graph, neighbor, dst, visited) === true) {
			return true;
		}
	}

	return false;
};

// console.log(buildGraph(myEdges));
console.log(hasPath(myEdges, 'a', 'b')); // true
console.log(hasPath(myEdges, 'a', 'f')); // true
console.log(hasPath(myEdges, 'a', 'h')); // false
console.log(hasPath(myEdges, 'a', 'g')); // false
