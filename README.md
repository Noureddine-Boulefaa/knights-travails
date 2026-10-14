# Knights Travails

A JavaScript project built for **The Odin Project** curriculum. It uses the **Breadth-First Search (BFS)** graph traversal algorithm to find the shortest possible path for a knight on an 8x8 chessboard between any two given positions.

## Features

- Computes the minimum number of moves to reach the destination square.
- Avoids off-board moves dynamically.
- Utilizes BFS to guarantee the shortest path solution.
- Prevents infinite loops using a `visited` Set.

## How to Run

Ensure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
node knights-travails.js