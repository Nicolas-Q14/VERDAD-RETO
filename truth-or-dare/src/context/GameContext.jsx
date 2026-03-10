import { createContext, useState, useEffect } from "react";

/* ✅ EXPORTACIÓN NECESARIA */
export const GameContext = createContext();

export function GameProvider({ children }) {

  const [players, setPlayers] = useState([]);
  const [mode, setMode] = useState("amigos");
  const [level, setLevel] = useState("normal");
  const [turn, setTurn] = useState(0);
  const [card, setCard] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "truthGame",
      JSON.stringify({ players, mode, level, turn })
    );
  }, [players, mode, level, turn]);

  const nextTurn = () => {
    if (players.length === 0) return;
    setTurn((prev) => (prev + 1) % players.length);
  };

  return (
    <GameContext.Provider
      value={{
        players,
        setPlayers,
        mode,
        setMode,
        level,
        setLevel,
        turn,
        nextTurn,
        card,
        setCard
      }}
    >
      {children}
    </GameContext.Provider>
  );
}