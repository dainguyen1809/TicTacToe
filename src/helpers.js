export function checkWinner(cells) {
  const lines = [
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // cols
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // diagonal
    [2, 4, 6],
    [0, 4, 8],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c])
      return cells[a];
  }
  return null;
}
