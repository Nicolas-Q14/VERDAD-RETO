import useGame from "../../hooks/useGame";

export default function PlayerTurn(){

  const { players, turn } = useGame();

  return(
    <div className="player-turn">
      🎯 Turno de
      <h2>{players[turn]}</h2>
    </div>
  );
}