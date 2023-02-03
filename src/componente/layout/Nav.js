// Menú de navegacion del sitio

import React from 'react'
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (

    <nav>
      {/* llamo a las distintas páginas */}

      <ul className="holder">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</NavLink></li>
        <li><NavLink to="/galeria" className={({ isActive }) => isActive ? "activo" : undefined}>Galería</NavLink></li>
        <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined}>Nosotros</NavLink></li>
        <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
      </ul>

    </nav>

  );
}

export default Nav;