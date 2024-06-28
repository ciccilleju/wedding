import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Footer = () => {
  const { userRole } = useContext(AuthContext);
  const { t } = useTranslation();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Wedding Info */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-xl font-bold mb-4">Informazioni sul Matrimonio</h3>
            <p className='text-white'>Data:  {t('celebrationDate')} </p>
            <p className='text-white'>Location {t('celebrationPlace')}</p>
            <p className='text-white'>Email: info@matrimonio.com</p>
          </div>

          {/* Gift Registry */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-xl font-bold mb-4">Regali e Lista Nozze</h3>
            <ul className="space-y-2">
              <li>  <Link to="/gifts" className="hover:text-gray-400">{t('gifts')}</Link></li>
              <li><a rel="noopener noreferrer" target="_blank" href="http://www.amazon.it" className="hover:text-gray-400">Amazon</a></li>
            </ul>
          </div>
          {/* RSVP and Directions */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-xl font-bold mb-4">RSVP & Indicazioni</h3>
            <ul className="space-y-2">
              <li>  <Link to="/rsvp" className="hover:text-gray-400">RSVP</Link></li>
              {(userRole === 'admin' || userRole === 'guest_italy') && <li>  <Link to="/accommodation" className="hover:text-gray-400">{t('accommodation')}</Link></li>}
              {(userRole === 'admin' || userRole === 'guest_hungary') && <li>  <Link to="/accommodation-hungary" className="hover:text-gray-400">{t('accommodation')}</Link></li>}
              <li><Link to="/travel" className="hover:text-gray-400"> {t('travel_info')}</Link></li>
            </ul>
          </div>
          {/* RSVP and Directions */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-xl font-bold mb-4">Contatti</h3>
            <ul className="space-y-2">
              <li>Francesco - (+39) - 349.393.21.82  </li>
              <li>Barbara - (+39) - 342.003.71.60  </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">© 2024 Francesco De Giorgio. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
