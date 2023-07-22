import React, { createContext, useEffect, useState } from "react";

export type GameState = {
  users: string[];
  activeUser: string;
  selections: Array<string | null>;
  makeSelection: (squareId: number) => void;
  winner: string | null;
  reset: () => void;
};

export const GameStateContext = createContext<GameState>({
  users: ["x", "o"],
  activeUser: null,
  selections: [],
  makeSelection: null,
  winner: null,
  reset: null,
});

export const GameStateProvider: React.FC = ({ children }) => {
  const [activeUser, setActiveUser] = useState("x");
  const [winner, setWinner] = useState(null);
  const [selections, setSelections] = useState<Array<string | null>>(
    Array(9).fill(null)
  );

  const makeSelection = (squareId: number) => {
    // Update selections
    setSelections((selections) => {
      selections[squareId] = activeUser;
      return [...selections];
    });

    // Switch active user to the next user's turn
    setActiveUser(activeUser === "x" ? "o" : "x");
  };

  const checkForWinner = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    winningCombos.forEach((combo) => {
      const code = combo.reduce((acc, curr) => `${acc}${selections[curr]}`, "");
      if (["xxx", "yyy"].includes(code)) setWinner(code[0]);
    });
  };

  const reset = () => {
    setSelections(Array(9).fill(null));
    setWinner(null);
    setActiveUser("x");
  };

  useEffect(() => {
    checkForWinner();
  }, [selections]);

  return (
    <GameStateContext.Provider
      value={{
        users: ["x", "o"],
        activeUser,
        selections,
        makeSelection,
        winner,
        reset,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};
