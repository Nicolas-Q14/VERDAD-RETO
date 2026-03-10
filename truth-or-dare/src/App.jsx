import { useState } from "react";
import { GameProvider } from "./context/GameContext";
import SetupScreen from "./components/setup/SetupScreen";
import GameScreen from "./components/game/GameScreen";

function App() {

  const [started, setStarted] = useState(false);

  return (
    <GameProvider>
      {!started
        ? <SetupScreen start={setStarted}/>
        : <GameScreen/>
      }
    </GameProvider>
  );
}

export default App;