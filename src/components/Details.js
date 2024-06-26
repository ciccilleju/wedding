import React from 'react';
import { useTranslation } from 'react-i18next';

const Details = () => {

  const { t } = useTranslation();


  return (
    <section>
      <h2>Dettagli del Matrimonio</h2>
      <p>Data: 24 Giugno 2024</p>
      <p>Luogo: Giardino Bellissimo, Città</p>
      <p>Dettagli della Cerimonia e del Ricevimento</p>
    </section>
  );
}

export default Details;
