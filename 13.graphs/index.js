class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const g = new Graph();

g.addVertex("Tokio");
g.addVertex("NY");
g.addVertex("Rio");
g.addVertex("Toronto");

g.addEdge("Rio", "NY");
g.addEdge("Tokio", "NY");
g.addEdge("Toronto", "NY");
g.addEdge("Tokio", "Rio");
console.log(g);

g.removeVertex("Rio");
console.log(g);

g.removeEdge("NY", "Toronto");
console.log(g);
