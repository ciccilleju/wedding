import React, { useContext } from 'react';
import noi from '../assets/noi.jpeg';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);

  return (

    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 md:p-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
        {t('welcome_to_our_wedding')}
      </h2>
      <p className="text-lg md:text-xl text-center text-gray-600 mb-8">
        Ciao {user?.firstName}, {t('happy_to_share_this_day_with_you')}
      </p>
      <img
        src={noi}
        alt="Foto di noi due"
        className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg"
      />
    </section>

  );
}

export default Home;
