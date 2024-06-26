import React from 'react';
import { useTranslation } from 'react-i18next';

const Accommodation = () => {

  const { t } = useTranslation();


  return (
    <section>
      <h2>{t('accommodation')}</h2>
      <p>{t('suggestet_hotels')}</p>
    </section>
  );
}

export default Accommodation;
