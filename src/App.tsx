import React from "react";
import GameBoard from "./components/GameBoard";
import { GameStateProvider } from "./contexts/GameState";
import "./App.css";

function App() {
  return (
    <GameStateProvider>
      <div className="container">
        <GameBoard />
      </div>
    </GameStateProvider>
  );
}

export default App;
