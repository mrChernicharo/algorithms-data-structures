const connectedComponentsCount = graph => {
	let count = 0;
	const visited = new Set();

	for (let node in graph) {
		if (explore(graph, node, visited) === true) {
			count++;
		}
	}

	console.log({ result: count });
	return count;
};

const explore = (graph, current, visited) => {
	if (visited.has(String(current))) return false;

	visited.add(String(current));

	for (let neighbor of graph[current]) {
		explore(graph, neighbor, visited);
	}

	return true;
};

const adjList = {
	0: [8, 1, 5],
	1: [0],
	2: [3, 4],
	3: [2, 4],
	4: [3, 2],
	5: [0, 8],
	8: [0, 5],
};

console.log(adjList);
connectedComponentsCount(adjList);
