import React from 'react';

function Teste4() {
  
  const mudartexto = () => {
    const txt_elemento = document.getElementById('texto');
    let txt_conteudo = prompt('Escreva o texto a ser inserido');
    txt_elemento.textContent = txt_conteudo;
  };
  
  return(
    <>
      <button class="btn btn-success" onClick={mudartexto}>Clique aqui para mudar o texto</button>
      <p id="texto">Esse texto será mudado</p>
    </>
  );
}

export default Teste4;