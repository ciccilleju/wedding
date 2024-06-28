import React from 'react';
import { useTranslation } from 'react-i18next';
import tonnara01 from '../../../assets/POI/tonnara/tonnara01.jpg';
import tonnara02 from '../../../assets/POI/tonnara/tonnara02.jpg';
import styles from '../Poi.module.scss';

const Tonnara = () => {

  const { t } = useTranslation();
  return (
    <div className={styles.poi}>
      <h2>     La Tonnara di Palmi perla della Calabria</h2>

      <p>
        Una spiaggia bianchissima che s’affaccia su una piscina naturale d’acqua salata limpida e azzurra, racchiusa, come in un abbraccio, da una serie di speroni rocciosi.
      </p>
      <img src={tonnara01} alt="Tonnara di Palmi" />
      <p>La spiaggia della Tonnara di Palmi, che deve il suo nome all’antica tonnara che qui sorgeva nel Novecento, è una delle più belle della Calabria.

      </p>
      <img src={tonnara02} alt="Tonnara di Palmi" />



    </div>
  );
}

export default Tonnara;



