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
  DFSRecursive(start) {
    const result = [];
    const visited = {};
    const adjList = this.adjacencyList;

    const dfs = (vertex) => {
      //   console.log({ vertex, result, visited });

      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    };

    dfs(start);

    return result;
  }

  DFSIterative(start) {
    const result = [];
    const visited = {};

    let stack = [];
    stack.push(start);

    while (stack.length) {
      //   console.log({ result, visited, stack });
      let vertex = stack.pop();

      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);

        this.adjacencyList[vertex].forEach((neighbor) => {
          stack.push(neighbor);
        });
      }
    }

    return result;
  }

  BFS(start) {
    const visited = {};
    const result = [];
    const queue = [start];

    visited[start] = true;

    while (queue.length) {
      let curr = queue.shift();

      result.push(curr);

      this.adjacencyList[curr].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g);
console.log(g.DFSRecursive("A"));
console.log(g.DFSIterative("A"));
console.log(g.BFS("A"));

//       A
//     /    \
//    B      C
//    |      |
//    C ---- E
//     \    /
//        F
//
