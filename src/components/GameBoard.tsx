import React, { useContext, useEffect } from "react";
import { GameStateContext } from "../contexts/GameState";
import Square from "./Square";

const GameBoard: React.FC = () => {
  const { selections, makeSelection, winner, reset } =
    useContext(GameStateContext);

  useEffect(() => {
    if (winner !== null) {
      alert(`Player ${winner.toUpperCase()} won!`);
      reset();
    }
  }, [winner]);

  return (
    <div className="gameboard">
      {selections.map((selection, i) => (
        <Square key={i} user={selection} onClick={() => makeSelection(i)} />
      ))}
    </div>
  );
};

export default GameBoard;
