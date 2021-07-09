//  Graph traversal uses:

//  Peer to peer networking
//  finding the shortest path between two points
//  finding cloest matchs/recommendations
//  GPS navigation
//  Solving mazes
//  AI (shortest path to win the game)

// Differently from trees, where there's only one way to get to a node, In graphs
// there are normally multiple different ways to get from one node to the other
//
//
//  Depth First Search --> visit children rather than siblings
//  Breadth First Search --> siblings rather than children
//
//  In graphs it might be confusing, but after you picked a starting node
//  it all comes down to what to visit first:
//
//
//  Visit all neighbors first then move on to a neighbor's neighbors? [BFS]
//      or
//  Visit one neighbor down to it's connections and when done, visit other neighbor? [DFS]
//
//  It's key to keep track of what vertices have already been visited,
//  otherwise, we would fall into endless loops
//

// in Breadth Firs Search, we search in layers, and therefore
// we can work the concept of height, that is the distance
// from a particular node to the starting node
//
//
//          A ---- G
//        /   \
//       B     C --- D --- E --- H
//                    \
//                      F
//  if A is our start, we can say
//  B, C and G have height of 1
//  D has height of 2
//  E and F have height of 3
//  H has height of 4
