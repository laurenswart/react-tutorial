import React from 'react';


function Square(props) {
    return (
      <button className={`square ${props.lastMove ? "lastMove" : ""}`} onClick={props.onClick}>{props.value}</button>
    );
  }

export default Square;