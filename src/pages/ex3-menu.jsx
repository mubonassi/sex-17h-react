import React from "react";
import { Outlet, Link } from "react-router-dom";

function Ex3_M() {
  return (
    <>
      <div>
        <Link to="ex3-1" class="btn btn-success">
          Introdução às Garrafas PET
        </Link>
        <Link to="ex3-2" class="btn btn-success">
          Impactos Ambientais e Reciclagem
        </Link>
        <Link to="ex3-3" class="btn btn-success">
          Curiosidades e Criatividade com Garrafas PET
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}

export default Ex3_M;
