import React, { useEffect, useState } from "react";

function CookieClicker() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    //if (!isNaN(salvo)) setContador(parseInt(salvo));
    const salvo = localStorage.getItem("burgers");
    const numero = parseInt(salvo);
    if (!isNaN(numero)){setContador(numero);}
    else{setContador(0);}
  }, []);

  useEffect(() => {
    document.title = `Burgers: ${contador}`;
    localStorage.setItem("burgers",contador);
  },[contador]);

  return (
    <>
      <h1>BurgerClicker</h1>
      <h2>Hamburguers Feitos: {contador}</h2>
      <button
        onClick={() => setContador(contador + 1)}
        className="btn btn-outline-info p-0 border-0 bg-transparent"
        style={{ cursor: "pointer" }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
          alt="burger"
          width="200"
          className="img-fluid"
        />
      </button>
      <p class="lead">🍔Conquistas Desbloqueadas!🍔</p>
      {contador >= 10 && <p>🥖Começando bem! (10 cliques)</p>}
      {contador >= 50 && <p>🍞Fatiando o pão! (50 cliques)</p>}
      {contador >= 100 && <p>🥓Muito bacon! (100 cliques)</p>}
      {contador >= 150 && <p>🥬Colocando um pouco de verde! (150 cliques)</p>}
      {contador >= 200 && <p>🧀Não existe 'muito queijo'! (200 cliques)</p>}
      {contador >= 300 && <p>🍅Cortar os tomates! (300 cliques)</p>}
      {contador >= 400 && <p>🔥Hora de ligar a churrasqueira! (400 cliques)</p>}
      {contador >= 500 && <p>🥩Tem que ser triplo de carne, né? (500 cliques)</p>}
      {contador >= 600 && <p>🥤Relaxa com sua bebida um pouco!(600 cliques)</p>}
      {contador >= 700 && <p>🍟Precisa das batatas! (700 cliques)</p>}
      {contador >= 800 && <p>🍽️Tá na hora de preparar tudo! (800 cliques)</p>}
      {contador >= 900 && <p>🍞🥓🍅🥬🧀🥩🧀🥩🧀🥩🍞 (900 cliques)</p>}
      {contador >= 1000 && <p>🍔🍟🥤 COMPLETO! (1000 cliques)</p>}
    </>
  );
}

export default CookieClicker;
