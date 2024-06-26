import React from 'react';
import { useTranslation } from 'react-i18next';

const Travel = () => {

  const { t } = useTranslation();
  return (
    <section>
      <h2>Informazioni di Viaggio</h2>
      <p>Aeroporto più vicino: Aeroporto di Città</p>
      <p>Stazione dei treni: Stazione Centrale</p>
    </section>
  );
}

export default Travel;
