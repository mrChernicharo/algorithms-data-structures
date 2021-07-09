class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
    if (
      Object.values(this.adjacencyList[v1]).includes(v2) ||
      Object.values(this.adjacencyList[v2]).includes(v1)
    )
      return undefined;

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    for (let adjVtx of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjVtx);
    }
    delete this.adjacencyList[vertex];
  }
}

const g = new Graph();

g.addVertex("Tokyo");
g.addVertex("NY");
g.addVertex("Rio");
g.addVertex("Berlin");
g.addVertex("CapeTown");
g.addVertex("LA");

g.addEdge("Rio", "NY");
g.addEdge("Tokyo", "NY");
g.addEdge("Tokyo", "LA");
g.addEdge("CapeTown", "Berlin");
g.addEdge("NY", "Berlin");
g.addEdge("NY", "LA");
g.addEdge("Tokyo", "Berlin");
console.log(g);

g.removeEdge("Berlin", "Tokyo");
console.log(g);

g.removeVertex("NY");
console.log(g);
