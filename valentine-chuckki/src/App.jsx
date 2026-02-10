import React, { useState } from "react";
import Riddle from "./components/Riddle";
import Proposal from "./components/Proposal";
import Success from "./components/Success";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [gameState, setGameState] = useState("riddle"); // riddle, proposal, success

  const handleUnlock = () => {
    setGameState("proposal");
  };

  const handleYes = () => {
    setGameState("success");
  };

  return (
    <div className="App">
      <MusicPlayer />
      {gameState === "riddle" && <Riddle onUnlock={handleUnlock} />}
      {gameState === "proposal" && <Proposal onYes={handleYes} />}
      {gameState === "success" && <Success />}
    </div>
  );
}

export default App;
