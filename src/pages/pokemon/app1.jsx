import React from 'react';
import { useEffect, useState } from 'react';

function P_App1() {
  const [id, setId] = useState(0);
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [spr, setSpr] = useState('');
  const [som,setSom] = useState('');

  const [move1, setMove1] = useState('');
  const [move2, setMove2] = useState('');
  const [move3, setMove3] = useState('');
  const [move4, setMove4] = useState('');

  useEffect(() => {
    const api = 'https://pokeapi.co/api/v2/pokemon/380';
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setId(data.id);
        setNome(data.name);
        setTipo(data.types[0].type.name);
        setSpr(data.sprites.front_default);
        setSom(data.cries.latest);

        setMove1(data.moves[0].move.name);
        setMove2(data.moves[1].move.name);
        setMove3(data.moves[2].move.name);
        setMove4(data.moves[3].move.name);
      });
  }, []);

  const tocarSom = () => {
    const audio = new Audio(som);
    audio.play();
  };
  return (
    <div>
      <h1>Informações do Pokémon</h1>
      <h2>Pokémon: {nome}</h2>
      <p>
        <img src={spr} /><br/>
        <button onClick={tocarSom}>Grito do(a) {nome}</button>
      </p>
      <ul>
        <li>ID: {id}</li>
        <li>Tipo: {tipo}</li>
      </ul>
      <hr />
      <h3>Moves Iniciais</h3>
      <ul>
        <li>{move1}</li>
        <li>{move2}</li>
        <li>{move3}</li>
        <li>{move4}</li>
      </ul>
    </div>
  );
}
export default P_App1;