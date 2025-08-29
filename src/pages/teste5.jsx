import React from 'react';
import { useState } from 'react';

function Teste5() {
  
  const [contador, setContador] = useState(0);
  const [numero, setNumero] = useState(0);
  
  return(
    <>
      <h1>UseState (Estado)</h1>
      <h2>Contador usando State</h2>
      <h3>Contador: {contador}</h3>
      <button class='btn btn-info' onClick={() => setContador(contador + 1)}>+</button>
      <button class='btn btn-info' onClick={() => setContador(contador - 1)}>-</button>
      <button class='btn btn-info' onClick={() => setContador(0)}>C</button><br/>
      
      Adicionar numero <input type='number' onChange={(e) => setNumero(Number(e.target.value))} />
      
      <button class='btn btn-info' onClick={() => setContador(contador + numero)}>add</button>
      <button class='btn btn-info' onClick={() => setContador(numero)}>=</button><br/>
      
      {contador > 10000 && <p>UAU! Passou de 10000!</p>}
    </>
  );
}

export default Teste5;