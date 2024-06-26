import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Header = () => {


  const { isUserLoggedIn, userRole } = useContext(AuthContext);

  useEffect(() => {
    console.log(isUserLoggedIn);
    console.log(userRole);
  }, [userRole, isUserLoggedIn]);


  return (
    <header>
      {(userRole === 'guest_hungary') && <>
        <h1>Üdvözöljük Esküvőnkön</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/details">Részletek</Link></li>
            <li><Link to="/schedule">Terv</Link></li>
            <li><Link to="/travel">Utazási információ</Link></li>
            <li><Link to="/accommodation">Szállás</Link></li>
            <li><Link to="/gifts">Egy gondolat nekünk</Link></li>
            <li><Link to="/poi">Látványosság</Link></li>
            <li><Link to="/rsvp">RSVP</Link></li>
            <li><Link to="/contact">Kapcsolatok</Link></li>
            {isUserLoggedIn && <li><Link to="/logout">Logout</Link></li>}
          </ul>
        </nav>
      </>}
      <h1>Benvenuti al Nostro Matrimonio</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/details">Dettagli</Link></li>
          <li><Link to="/schedule">Programma</Link></li>
          <li><Link to="/travel">Informazioni di Viaggio</Link></li>
          {(userRole === 'admin' || userRole === 'guest_italy') && <li><Link to="/accommodation">Alloggio</Link></li>}
          <li><Link to="/gifts">Un pensiero per noi</Link></li>
          <li><Link to="/poi">Punti di Interesse</Link></li>
          <li><Link to="/rsvp">RSVP</Link></li>
          <li><Link to="/contact">Contatti</Link></li>
          {isUserLoggedIn && <li><Link to="/logout">Logout</Link></li>}
        </ul>
      </nav>
    </header >
  );
}

export default Header;
