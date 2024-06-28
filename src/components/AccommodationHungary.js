import React from 'react';
import { useTranslation } from 'react-i18next';

const AccommodationHungary = () => {

  const { t } = useTranslation();


  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      <section>
        <h2>{t('accommodation')}</h2>
        <p>{t('suggestet_hotels')}</p>

        la notte del vostro arrivo e la notte del matrimonio, se lo vorrete, sarete nostri ospiti presso l'hotel XXXX

        Se desideraste fermarvi ancora qualche giorno e godere delle spiagge calabresi ecco alcuni alberghi in zona che
        vi suggeriamo
      </section>

    </div>
  );
}

export default AccommodationHungary;
