import React from 'react';
import { useTranslation } from 'react-i18next';

const Details = () => {

  const { t } = useTranslation();


  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      <section>
        <h2 className='mb-4 text-center'>Dettagli del Matrimonio</h2>
      </section>
      <section>
        <p>Data: {t('celebrationDate')} - {t('celebrationTime')} </p>
        <p>Luogo: {t('celebrationPlace')} </p>
        <p>Dettagli della Cerimonia e del Ricevimento</p>
      </section>
    </div>
  );
}

export default Details;
