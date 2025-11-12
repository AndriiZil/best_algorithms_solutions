'use strict';

/**
 * Вузли (vertices) і ребра (edges). Представлення: adjacency list (зручніше, економніше) або матриця суміжності.
 *
 * 	•	BFS/DFS: O(V + E)
 * 	•	Shortest path (unweighted): BFS O(V + E)
 * 	•	Dijkstra (non-negative weights): O(E + V log V) with heap
 */

class Graph {
  constructor() {
    this.adj = new Map(); // node -> array of {to, weight}
  }
  addNode(u) {
    if (!this.adj.has(u)) this.adj.set(u, []);
  }
  addEdge(u, v, weight = 1) {
    this.addNode(u);
    this.addNode(v);
    this.adj.get(u).push({ to: v, weight });
  }
  bfs(start) {
    const visited = new Set();
    const q = [start];
    const order = [];
    visited.add(start);
    while (q.length) {
      const u = q.shift();
      order.push(u);
      for (const { to } of this.adj.get(u) || []) {
        if (!visited.has(to)) {
          visited.add(to);
          q.push(to);
        }
      }
    }
    return order;
  }
}
