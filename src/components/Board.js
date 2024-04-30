import React from "react";
import Cells from "./Cells";
import "./Game.css";

export default function Board(props) {
  return (
    <div className="board">
      {props.cells.map((item, index) => (
        <Cells
          key={index}
          value={item}
          onClick={() => props.onClick(index)} // onClick={() ... thuộc về component cells
          className={item === "x" ? "is-x" : item === "o" ? "is-o" : ""}
        ></Cells>
      ))}
    </div>
  );
}
