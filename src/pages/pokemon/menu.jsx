import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Pokemon() {
  return (
    <>
      <div>
        <Link to="teste" className="btn btn-success">
          Teste de API
        </Link>
        <Link to="app1" className="btn btn-success">
          App 1
        </Link>
        <Link to="app2" className="btn btn-success">
          App 2
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
export default Pokemon;
