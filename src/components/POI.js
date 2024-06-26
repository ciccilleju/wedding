import React from 'react';
import { useTranslation } from 'react-i18next';

const POI = () => {

  const { t } = useTranslation();
  return (
    <section>
      <h2 className="text-3xl font-bold underline">Punti di Interesse</h2>
      <p>Attrazioni Vicine</p>
    </section>
  );
}

export default POI;
