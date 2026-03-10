import { useState } from "react";
import useGame from "../../hooks/useGame";

export default function SetupScreen({ start }) {

  const { setPlayers, setMode, setLevel } = useGame();
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const addPlayer = () => {
    if (!name) return;
    setList([...list, name]);
    setName("");
  };

  const begin = () => {
    setPlayers(list);
    start(true);
  };

  return (
    <div>
      <h1>Verdad o Reto PRO 🔥</h1>

      <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Nombre jugador"
      />

      <button onClick={addPlayer}>Agregar</button>

      {list.map((p,i)=><p key={i}>{p}</p>)}

      <select onChange={(e)=>setMode(e.target.value)}>
        <option value="amigos">Amigos</option>
        <option value="pareja">Pareja</option>
        <option value="fiesta">Fiesta</option>
      </select>

      <select onChange={(e)=>setLevel(e.target.value)}>
        <option value="normal">Normal</option>
        <option value="medio">Medio</option>
        <option value="picante">Picante</option>
        <option value="extremo">Extremo</option>
      </select>

      <button onClick={begin}>Iniciar</button>
    </div>
  );
}