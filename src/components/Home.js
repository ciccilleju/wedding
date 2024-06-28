import React, { useContext } from 'react';
import noi from '../assets/noi.jpeg';
import calabriaBackground from '../assets/POI/calabria.webp';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
const Home = () => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);

  return (
    <div className="relative min-h-screen">

      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 md:p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${calabriaBackground})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-6 relative z-10">
          {t('noi')}
        </h1>
        <p className="text-3xl md:text-2xl text-center text-gray-200 mb-8 relative z-10">
          {t('celebrationDate')} - {t('celebrationTime')} {t('celebrationPlace')}
        </p>
        <p className="text-lg md:text-xl text-center text-gray-200 mb-8 relative z-10 w-3/4">
          Ciao {user?.firstName}, {t('happy_to_share_this_day_with_you')}
        </p>
        <p className="text-3xl md:text-2xl text-center text-gray-200 mb-8 relative z-10">
          {t('please_check_your_rsvp')}
          <Link to="/RSVP" className="text-blue-300 underline ml-2">{t('qui')}</Link>
        </p>
        <img
          src={noi}
          alt="Foto di noi due"
          className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg relative z-10"
        />
      </section>

    </div>
  );
}

export default Home;