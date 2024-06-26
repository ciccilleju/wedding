import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';


const Header = () => {

  const { t } = useTranslation();
  const { isUserLoggedIn, userRole } = useContext(AuthContext);

  useEffect(() => {
    console.log(isUserLoggedIn);
    console.log(userRole);
  }, [userRole, isUserLoggedIn]);


  return (
    <header>
      <h1>{t('welcome_to_our_wedding')} </h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/details">{t('details')}</Link></li>
          <li><Link to="/schedule">{t('schedule')}</Link></li>
          <li><Link to="/travel">{t('travel_info')}</Link></li>
          {(userRole === 'admin' || userRole === 'guest_italy') && <li><Link to="/accommodation">{t('accommodation')}</Link></li>}
          {(userRole === 'admin' || userRole === 'guest_hungary') && <li><Link to="/accommodation-hungary">{t('accommodation')}</Link></li>}
          <li><Link to="/gifts">{t('gifts')}</Link></li>
          <li><Link to="/poi">{t('poi')}</Link></li>
          <li><Link to="/rsvp">{t('rsvp')}</Link></li>
          <li><Link to="/contact">{t('contact')}</Link></li>
          {isUserLoggedIn && <li><Link to="/logout">Logout</Link></li>}
        </ul>
      </nav>
    </header >
  );
}

export default Header;
