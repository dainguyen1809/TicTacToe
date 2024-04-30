import React, { useState } from "react";
import Board from "./Board";
import { checkWinner } from "../helpers";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [point, setPoint] = useState(true);

  const winner = checkWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];

    // check already winner
    if (winner || boardCopy[index]) return;
    boardCopy[index] = point ? "x" : "o";
    setBoard(boardCopy);
    setPoint((point) => !point);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setPoint(true);
  };

  return (
    <div>
      <div>
        <Board cells={board} onClick={handleClick}></Board>
        {/* 
          onClick là props của Board
        */}
        <div className="winner">{winner ? `Winner is ${winner}` : ""}</div>
        <button className="btn-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
