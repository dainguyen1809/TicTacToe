import React, { useState } from "react";
import Board from "./Board";
import { checkWinner } from "../helpers";

export default function Game() {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [point, setPoint] = useState(true);

  const [state, setState] = useState({
    board: Array(9).fill(null),
    point: true,
  });

  const winner = checkWinner(state.board);

  const handleClick = (index) => {
    const boardCopy = [...state.board];

    // check already winner
    if (winner || boardCopy[index]) return;
    boardCopy[index] = state.point ? "x" : "o";
    setState({
      ...state,
      board: boardCopy,
      point: !state.point,
    });
  };

  const handleReset = () => {
    setState({
      ...state,
      board: Array(9).fill(null),
      point: state.point,
    });
  };

  return (
    <div>
      <div>
        <Board cells={state.board} onClick={handleClick}></Board>
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
