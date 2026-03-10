import { useState } from "react";
import useGame from "../../hooks/useGame";

export default function ChallengeCard() {

  const { card, nextTurn, players, turn } = useGame();
  const [flipped, setFlipped] = useState(false);

  if (!card) return null;

  const handleNext = () => {
    setFlipped(false);
    setTimeout(() => nextTurn(), 300);
  };
  console.log("ChallengeCard PRO cargado");
  return (
    <div className="card-container">

      <div
        className={`card-pro ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(true)}
      >
        <div className="card-front">
          <h3>TOCA PARA VER 👆</h3>
          <p>{players[turn]}</p>
        </div>

        <div className="card-back">
          <h2>{card.type.toUpperCase()}</h2>
          <p>{card.text}</p>

          <button onClick={handleNext}>
            Siguiente →
          </button>
        </div>

      </div>
    </div>
  );
}