export default function ActionButtons() {
  const { getChallenge } = useGame();

  return (
    <div className="actions">
      <button className="truth"
        onClick={()=>getChallenge("verdad")}>
        VERDAD
      </button>

      <button className="dare"
        onClick={()=>getChallenge("reto")}>
        RETO
      </button>
    </div>
  );
}