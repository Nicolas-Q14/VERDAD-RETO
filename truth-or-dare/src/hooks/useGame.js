import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { gameData } from "../data/questions";

export default function useGame() {

  const game = useContext(GameContext);

  const random = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

  const getChallenge = (type) => {

    const pool =
      gameData[game.mode][game.level][type];

    game.setCard({
      type,
      text: random(pool)
    });
  };

  return { ...game, getChallenge };
}