// All 8 possible moves a knight can make [x, y]
const KNIGHT_MOVES = [
  [2, 1], [2, -1], [-2, 1], [-2, -1],
  [1, 2], [1, -2], [-1, 2], [-1, -2]
];

// Helper function to check if coordinates are within the 8x8 chessboard
function isValidMove(x, y) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

// Main function to calculate the shortest knight path
function knightMoves(start, end) {
  // Edge case: if start and end are identical
  if (start[0] === end[0] && start[1] === end[1]) {
    console.log(`You made it in 0 moves! Here's your path:`);
    console.log(start);
    return [start];
  }

  // Queue stores objects containing current position and the full path taken to reach it
  const queue = [[start, [start]]];

  // Set to keep track of visited squares to prevent infinite loops and redundant work
  const visited = new Set();
  visited.add(start.toString());

  // BFS Algorithm Loop
  while (queue.length > 0) {
    const [current, path] = queue.shift();
    const [x, y] = current;

    // Explore all 8 potential knight moves
    for (const [dx, dy] of KNIGHT_MOVES) {
      const nextX = x + dx;
      const nextY = y + dy;
      const nextPos = [nextX, nextY];

      // Verify the move is on the board
      if (isValidMove(nextX, nextY)) {
        // Target reached
        if (nextX === end[0] && nextY === end[1]) {
          const fullPath = [...path, nextPos];
          
          // Print formatted output required by The Odin Project
          console.log(`You made it in ${fullPath.length - 1} moves! Here's your path:`);
          fullPath.forEach(pos => console.log(pos));
          
          return fullPath;
        }

        // Add move to queue if it hasn't been visited before
        const posString = nextPos.toString();
        if (!visited.has(posString)) {
          visited.add(posString);
          queue.push([nextPos, [...path, nextPos]]);
        }
      }
    }
  }
}

// --- Test Cases ---

knightMoves([0, 0], [1, 2]);
console.log('-------------------');
knightMoves([0, 0], [3, 3]);
console.log('-------------------');
knightMoves([3, 3], [0, 0]);
console.log('-------------------');
knightMoves([0, 0], [7, 7]);