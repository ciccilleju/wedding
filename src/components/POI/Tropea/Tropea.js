import React from 'react';
import { useTranslation } from 'react-i18next';
import tropea from '../../../assets/POI/tropea/tropea.jpg';
import styles from '../Poi.module.scss';

const Tropea = () => {

  const { t } = useTranslation();
  return (
    <div className={styles.poi}>
      <h2 className="text-3xl font-bold underline">Tropea</h2>

      <p>
        Tropea, cittadina nota soprattutto per le sue spiagge bellissime, per i fondali ideali per chi ama le esplorazioni subacquee e per la sua gastronomia. È nota in tutto il mondo, infatti la Cipolla di Tropea, unica per la sua dolcezza, una dolcezza favorita dal clima e dalla vicinanza del mare. Il mare fu, nella sua storia, anche fonte di pericoli: per difenderla, gli Arabi costruirono la Torre Lunga sulla parte più alta della roccia, i Bizantini le mura e gli Aragonesi la Torre Maestra.
      </p>
      <img src={tropea} alt="Tropea" />
      <p>Da vivere, poi, è il centro storico, dove il profumo della salsedine pervade l’aria e i ristorantini offrono imperdibili piatti a base di pesce, da gustare magari all’aperto per poi andare a guardare il mare che, nel buio della notte, riflette le mille luci della città  </p>



    </div>
  );
}

export default Tropea;



