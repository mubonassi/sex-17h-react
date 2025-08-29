import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Teste1 from './pages/teste1.jsx';
import Teste2 from './pages/teste2.jsx';
import Teste3 from './pages/teste3.jsx';
import Teste4 from './pages/teste4.jsx';
import Teste5 from './pages/teste5.jsx';
import Teste6 from './pages/teste6.jsx';
import Ex1 from './pages/ex1.jsx';
import Ex2 from './pages/ex2.jsx';
import Ex3 from './pages/ex3-menu.jsx';
import Ex3_1 from './pages/ex3-1.jsx';
import Ex3_2 from './pages/ex3-2.jsx';
import Ex3_3 from './pages/ex3-3.jsx';
import CC from './pages/CookieClicker.jsx';
import Header from './pages/header.jsx';
import MenuP from './pages/menu_p.jsx';

import Pokemon from './pages/pokemon/menu.jsx';
import P_Teste from './pages/pokemon/teste.jsx';
import P_App1 from './pages/pokemon/app1.jsx';
import P_App2 from './pages/pokemon/app2.jsx';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h2>Escolha sua página</h2>} />

          <Route path="MenuP" element={<MenuP />}>
            <Route path="teste1" element={<Teste1 />} />
            <Route path="teste2" element={<Teste2 />} />
            <Route path="teste3" element={<Teste3 />} />
            <Route path="teste4" element={<Teste4 />} />
            <Route path="teste5" element={<Teste5 />} />
            <Route path="teste6" element={<Teste6 />} />
            <Route path="ex1" element={<Ex1 />} />
            <Route path="ex2" element={<Ex2 />} />
            <Route path="cc" element={<CC />} />
          </Route>
          <Route path="ex3-menu" element={<Ex3 />}>
            <Route path="ex3-1" element={<Ex3_1 />} />
            <Route path="ex3-2" element={<Ex3_2 />} />
            <Route path="ex3-3" element={<Ex3_3 />} />
          </Route>
          <Route path="pokemon" element={<Pokemon />}>
            <Route path="teste" element={<P_Teste />} />
            <Route path="app1" element={<P_App1 />} />
            <Route path="app2" element={<P_App2 />} />
          </Route>

          <Route path="*" element={<h2>ERRO: Página não encontrada</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
