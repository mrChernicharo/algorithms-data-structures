// const edgesList = [
// 	['w', 'x'],
// 	['x', 'y'],
// 	['z', 'y'],
// 	['z', 'v'],
// 	['w', 'v'],
// ];
const edgesList = [
	['w', 'x'],
	['w', 'v'],
	['x', 'y'],
	['y', 'q'],
	['q', 'z'],
	['v', 't'],
	['t', 's'],
	['s', 'z'],
	['t', 'r'],
];
const buildGraph = edgesTable => {
	const listObj = {}; // our adjacency list

	for (const edge of edgesTable) {
		const [nodeA, nodeB] = edge;

		if (!(nodeA in listObj)) listObj[nodeA] = [];
		if (!(nodeB in listObj)) listObj[nodeB] = [];

		listObj[nodeA].push(nodeB);
		listObj[nodeB].push(nodeA);
	}

	console.log(listObj);
	return listObj;
};

const findShortestPath = (edges, src, destination) => {
	const graph = buildGraph(edges);

	const queue = [[src, 0]];
	const visited = new Set();

	while (queue.length > 0) {
		let [node, distance] = queue.shift();

		if (node === destination) return distance;

		visited.add(node);

		for (let neighbor of graph[node]) {
			if (!visited.has(neighbor)) {
				queue.push([neighbor, distance + 1]);
			}
		}
	}

	return -1;
};

console.log(findShortestPath(edgesList, 'w', 'z'));
console.log(findShortestPath(edgesList, 'v', 'a'));
// console.log(findShortestPath(edgesList, 'y', 'v'));
