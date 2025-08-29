import React from 'react';
import { useEffect, useState } from 'react';

function Teste6() {
  const [contador,setContador] = useState(0);

  useEffect(() => {
    console.log('Estado inicial com sucesso!');
    const salvo = localStorage.getItem("contador");
    if (!isNaN(salvo)) setContador(parseInt(salvo));
  }, []);

  useEffect(() => {
    console.log('Contador mudou! Agora está: ',contador);
    document.title = `Contador: ${contador}`;
    localStorage.setItem("contador",contador);
  },[contador]);

  return (
    <div>
      <h2>Teste de useEffect</h2>
      <button className='btn btn-success' onClick={() => setContador(contador + 1)}>+</button>
    </div>
  );
}

export default Teste6;