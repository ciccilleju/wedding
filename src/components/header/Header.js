import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';

import './Header.scss';
import LangFlags from './LangFlags';

const Header = () => {
  const { t } = useTranslation();
  const { isUserLoggedIn, userRole } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);


  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-center items-center py-6 lg:py-4 px-6">
        <span
          className="md:hidden text-gray-800 focus:outline-none absolute top-4 right-4"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </span>
        <nav className={`md:flex md:items-center md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/details" className="text-gray-600 hover:text-blue-600 transition duration-300">
                {t('details')}
              </Link>
            </li>
            <li>
              <Link to="/schedule" className="text-gray-600 hover:text-blue-600 transition duration-300">
                {t('schedule')}
              </Link>
            </li>
            {(userRole === 'admin' || userRole === 'guest_italy') && (
              <>
                <li>
                  <Link to="/travel" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    {t('travel_info')}
                  </Link>
                </li>
                <li>
                  <Link to="/accommodation" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    {t('accommodation')}
                  </Link>
                </li>
              </>
            )}
            {(userRole === 'admin' || userRole === 'guest_hungary') && (
              <li>
                <Link to="/accommodation-hungary" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  {t('accommodation')}
                </Link>
              </li>
            )}
            <li>
              <Link to="/gifts" className="text-gray-600 hover:text-blue-600 transition duration-300">
                {t('gifts')}
              </Link>
            </li>
            <li>
              <Link to="/poi" className="text-gray-600 hover:text-blue-600 transition duration-300">
                {t('poi')}
              </Link>
            </li>
            {isUserLoggedIn && (
              <li>
                <Link to="/rsvp" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  {t('rsvp')}
                </Link>
              </li>
            )}
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">
                {t('contact')}
              </Link>
            </li>
            {userRole === 'admin' && (
              <li>
                <Link to="/users" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  Users Management
                </Link>
              </li>
            )}
            {isUserLoggedIn ? (
              <li>
                <Link to="/logout" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  Login
                </Link>
              </li>
            )}
          </ul>
          <LangFlags />
        </nav>
      </div>
    </header>
  );
};

export default Header;
