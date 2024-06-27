import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import enFlag from '../../assets/flags/en-flag.png';
import itFlag from '../../assets/flags/it-flag.png';
import huFlag from '../../assets/flags/hu-flag.png';
import './Header.scss';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { isUserLoggedIn, userRole } = useContext(AuthContext);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <h1>{t('welcome_to_our_wedding')} </h1>
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/details">{t('details')}</Link></li>
          <li><Link to="/schedule">{t('schedule')}</Link></li>
          {(userRole === 'admin'
            || userRole === 'guest_italy') && <li><Link to="/travel">{t('travel_info')}</Link></li>}
          {(userRole === 'admin'
            || userRole === 'guest_italy') && <li><Link to="/accommodation">{t('accommodation')}</Link></li>}
          {(userRole === 'admin'
            || userRole === 'guest_hungary') && <li><Link to="/accommodation-hungary">{t('accommodation')}</Link></li>}
          <li><Link to="/gifts">{t('gifts')}</Link></li>
          <li><Link to="/poi">{t('poi')}</Link></li>
          <li><Link to="/rsvp">{t('rsvp')}</Link></li>
          <li><Link to="/contact">{t('contact')}</Link></li>
          {isUserLoggedIn && <li><Link to="/logout">Logout</Link></li>}
          {userRole === 'admin' && <li><Link to="/users">Users Managements</Link></li>}
        </ul>
      </nav>
      <div className="language-switcher">
        <span onClick={() => changeLanguage('en')}>
          <img src={enFlag} alt="English" />
        </span>
        <span onClick={() => changeLanguage('it')}>
          <img src={itFlag} alt="Italiano" />
        </span>
        <span onClick={() => changeLanguage('hu')}>
          <img src={huFlag} alt="Magyar" />
        </span>
      </div>
    </header>
  );
};

export default Header;
