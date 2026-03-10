import PlayerTurn from "./PlayerTurn";
import ActionButtons from "./ActionButtons";
import ChallengeCard from "./ChallengeCard";

export default function GameScreen() {
  return (
    <>
      <PlayerTurn />
      <ActionButtons />
      <ChallengeCard />
    </>
  );
}