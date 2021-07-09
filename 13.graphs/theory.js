//     GRAPHS
//
//     vertex == node |  edge == connection
//
//     A tree is a graph where there's only one connection between two nodes
//     A binary tree, is a tree where a node can be connected to a maximum of two nodes
//
//     Graphs can be DIRECTED / UNDIRECTED and WEIGHTED / UNWHEIGHTED.
//     these classifications refer to how the edges behave in a particular graph
//
//     Facebook's connections are UNDIRECTED wheras Instagram's are DIRECTED
//
//     STORING GRAPHS
//     to represent a graph you need to take note of the vertices (nodes) and its connections (edges)
//
//     to keep track of the EDGES we can use two approaches: ADJACENCY MATRIX or ADJACENCY LIST
//
//      ADJACENCY MATRIX creates a table (matrix)
//
//       ____|  A  |  B  |  C  |
//        A  |  0  |  1  |  1  |
//        B  |  1  |  0  |  0  |
//        C  |  1  |  0  |  0  |
//
//
//      ADJACENCY LIST uses a hash table
//      {
//          A: ['B', 'C']
//          B: ['A']
//          C: ['A']
//      }
//
//
//      BIG O
//
//      OPERATION   |  ADJACENCY LIST | ADJACENCY MATRIX |
//
//      Add node    |   O(1)          |   O(v^2)
//      Add edge    |   O(1)          |   O(1)
//      Remove node |   O(v + e)      |   O(v^2)
//      Remove edge |   O(e)          |   O(1)
//      Query       |   O(v + e)      |   O(1)
//      Storage     |   O(v + e)      |   O(v^2)
//
//
//      ADJACENCY LIST        X         ADJACENCY MATRIX
//
//      Takes less space                Takes less space
//      in sparce graphs                in heavly connected
//                                      graphs (rare case)
//
//      Faster to iterate               Slower to iterate
//      over all edges                  over all edges
//
//      Slower to lookup                Slower to lookup
//      specific edge                   specific edge
//
//
//      We'll be using an adjacencyList because most data in
//      in real world use cases tends to lend itself sparcer and
//      larger graphs
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
