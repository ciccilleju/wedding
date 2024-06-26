import React from 'react';
import noi from '../assets/noi.jpeg';
import { useTranslation } from 'react-i18next';
const Home = () => {

  const { t } = useTranslation();
  return (
    <section>
      <h2 className="text-3xl font-bold underline">Benvenuti al Nostro Matrimonio</h2>
      <p>Siamo felicissimi di condividere con voi questo giorno speciale. Grazie per essere parte della nostra vita!</p>
      <img src={noi} alt="Foto di noi due" />
    </section>
  );
}

export default Home;
