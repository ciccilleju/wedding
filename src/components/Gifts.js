import React from 'react';
import { useTranslation } from 'react-i18next';

const Gifts = () => {

  const { t } = useTranslation();


  return (
    <section>
      <h2>Regali</h2>
      <p>Conto Bancario: 123456789</p>
    </section>
  );
}

export default Gifts;
