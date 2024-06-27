import React from 'react';
import { useTranslation } from 'react-i18next';
import reggio from '../../../assets/POI/reggio/reggio.jpg';
import styles from '../Poi.module.scss';

const ReggioCalabria = () => {

  const { t } = useTranslation();
  return (
    <div className={styles.poi}>
      <h2 className="text-3xl font-bold underline">Reggio Calabria</h2>

      <p>
        Mare e montagna si incontrano sulla punta dello stivale, nel cuore della Magna Grecia. Reggio Calabria è una città di incantesimi e sortilegi, celebrata dai viaggiatori inglesi e francesi dell'800, attirati da un clima mediterraneo sempre favorevole e dalla sua storia millenaria.  </p>
      <img src={reggio} alt="Reggio Calabria" />
      <p>La storia di Reggio Calabria è quella della più antica colonia della Magna Grecia nell'Italia meridionale: e il suo fascino attuale è ancora legato a quel periodo di splendore. Alleata di Roma durante le guerre pirriche, Reggio Calabria aumentò il proprio prestigio durante il periodo in cui fu municipium romano. Fu tra le prime città della penisola a essere influenzata dal Cristianesimo e rimase una grande metropoli strategica durante l’impero bizantino e per tutto il periodo normanno.

        Profondamente danneggiata dai gravi terremoti del 1562 e 1783, Reggio Calabria entrò a far parte del Regno di Napoli e del Regno delle Due Sicilie, subendo importanti e rapidi processi di modernizzazione e sviluppo.
      </p>



    </div>
  );
}

export default ReggioCalabria;



