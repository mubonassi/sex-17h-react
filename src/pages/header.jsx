import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="header-super">
        <div className="container-fluid d-flex justify-content-center align-items-center header-text">
          <h1 className="display-1 header-title text-center">
            Canivete Suiço de React
          </h1>
        </div>
      </header>
      <nav>
        <Link to="/menup" class="btn btn-danger">
          Menu Principal
        </Link>
        <Link to="/ex3-menu" class="btn btn-danger">
          Garrafas Pet
        </Link>
        <Link to="/pokemon" class="btn btn-danger">
          Pokemon
        </Link>
      </nav>
    </>
  );
}

export default Header;
