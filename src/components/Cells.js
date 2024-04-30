import React from "react";

export default function Cells({ value, onClick, className }) {
  return (
    <div className={`cell ${className}`} onClick={onClick}>
      {/* 
      onClick={.... onClick nay la event handling
    */}
      {value}
    </div>
  );
}
