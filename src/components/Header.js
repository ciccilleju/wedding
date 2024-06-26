import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Header = () => {


  const { isUserLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    console.log(isUserLoggedIn);
  }, [isUserLoggedIn]);


  return (
    <header>
      <h1>Benvenuti al Nostro Matrimonio</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/details">Dettagli</Link></li>
          <li><Link to="/schedule">Programma</Link></li>
          <li><Link to="/travel">Informazioni di Viaggio</Link></li>
          <li><Link to="/accommodation">Alloggio</Link></li>
          <li><Link to="/gifts">Regali</Link></li>
          <li><Link to="/poi">Punti di Interesse</Link></li>
          <li><Link to="/rsvp">RSVP</Link></li>
          <li><Link to="/contact">Contatti</Link></li>
          {isUserLoggedIn && <li><Link to="/logout">Logout</Link></li>}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
