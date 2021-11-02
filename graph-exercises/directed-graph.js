/*
    every graph translates into an adjacency list:

        1 --> 2 --> 5
        |     |
        v     V
        3     4 --> 6 <-- 7

    this graph can be represented as:

    {
        1: [2, 3],
        2: [4, 5],
        3: [],
        4: [6],
        5: [],
        6: [],
        7: [6]
    }  

    It's key to know if the graph is directed or undirected
    and also to know if there are cycles within the graph
*/

const myGraph = {
	a: ['b', 'c'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: [],
};

// depthFirst uses a stack
const depthFirstPrint = (graph, source) => {
	const stack = [source];

	while (stack.length > 0) {
		const current = stack.pop();
		console.log(current);

		for (let neighbor of graph[current]) {
			stack.push(neighbor);
		}
	}
};

// breadthFirst uses a queue
const breadthFirstPrint = (graph, source) => {
	const queue = [source];

	while (queue.length > 0) {
		const current = queue.shift();
		console.log(current);

		for (let neighbor of graph[current]) {
			queue.push(neighbor);
		}
	}
};

const recursiveDepthFirstPrint = (graph, source) => {
	console.log(source);

	for (let neighbor of graph[source]) {
		recursiveDepthFirstPrint(graph, neighbor);
	}
};

// depthFirstPrint(myGraph, 'a'); // acebdf
recursiveDepthFirstPrint(myGraph, 'a'); // abdfce
// breadthFirstPrint(myGraph, 'a'); // abcdef
