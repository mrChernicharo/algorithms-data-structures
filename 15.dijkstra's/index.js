class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}
	dijkstra(start, finish) {
		const queue = new PriorityQueue();
		const distances = {};
		const previous = {};
		let path = []; //to return at end
		let smallest;

		//build up initial state
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				queue.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				queue.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		// as long as there is something to visit
		while (queue.values.length) {
			smallest = queue.dequeue().val;
			if (smallest === finish) {
				//WE ARE DONE, BUILD UP PATH TO RETURN AT END
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}

			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbor in this.adjacencyList[smallest]) {
					//find neighboring node
					let nextNode = this.adjacencyList[smallest][neighbor];
					//calculate new distance to neighboring node
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.node;

					if (candidate < distances[nextNeighbor]) {
						//updating new smallest distance to neighbor
						distances[nextNeighbor] = candidate;
						//updating previous - How we got to neighbor
						previous[nextNeighbor] = smallest;
						//enqueue in priority queue with new priority
						queue.enqueue(nextNeighbor, candidate);
					}
				}
			}
		}
		return path.concat(smallest).reverse();
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		this.values.push({ val, priority });
		this.sort();
	}
	dequeue() {
		return this.values.shift();
	}
	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}

const g = new WeightedGraph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');

g.addEdge('A', 'B', 9);
g.addEdge('A', 'C', 5);
g.addEdge('A', 'D', 13);
g.addEdge('B', 'C', 3);
g.addEdge('C', 'D', 4);

Object.entries(g.adjacencyList).forEach(([key, value]) => {
	console.log(key, value);
});

console.log(g.dijkstra('A', 'D'));
