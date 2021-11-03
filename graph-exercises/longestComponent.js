const myGraph = {
	0: ['8', '1', '5'],
	1: ['0'],
	5: ['0', '8'],
	8: ['0', '5'],
	2: ['3', '4'],
	3: ['2', '4'],
	4: ['3', '2'],
};

const countLongestComponent = graph => {
	const visited = new Set();
	let longest = 0;

	for (let node in graph) {
		const size = exploreSize(graph, node, visited);

		longest = Math.max(longest, size);
	}

	console.log(longest);
	return longest;
};

const exploreSize = (graph, current, visited) => {
	if (visited.has(current)) return 0;

	visited.add(current);

	let size = 1;

	for (let neighbor of graph[current]) {
		size += exploreSize(graph, neighbor, visited);
	}

	return size;
};

countLongestComponent(myGraph);
