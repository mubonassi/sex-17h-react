import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Menu_p() {
  return(
    <>
      <div>
        <Link to="teste1" class="btn btn-danger">Teste 1</Link>
        <Link to="teste2" class="btn btn-danger">Teste 2</Link>
        <Link to="teste3" class="btn btn-danger">Teste 3</Link>
        <Link to="teste4" class="btn btn-danger">Teste 4</Link>
        <Link to="teste5" class="btn btn-danger">Teste 5</Link>
        <Link to="teste6" class="btn btn-danger">Teste 6</Link>
        <Link to="ex1" class="btn btn-warning">Ex1</Link>
        <Link to="cc" class="btn btn-warning">CC</Link>
      </div>
      <hr/>
      <Outlet />
    </>
  );
}

export default Menu_p;