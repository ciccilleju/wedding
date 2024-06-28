import React from 'react';
import { useTranslation } from 'react-i18next';
import capovaticano01 from '../../../assets/POI/capovaticano/capovaticano01.webp';
import capovaticano02 from '../../../assets/POI/capovaticano/capovaticano02.webp';
import styles from '../Poi.module.scss';

const CapoVaticano = () => {

  const { t } = useTranslation();
  return (
    <div className={styles.poi}>
      <h2> Capo Vaticano - Una terrazza naturale sulla Costa degli Dei</h2>

      <p>
        I litorali della Calabria sono famosi e apprezzati in tutto il mondo e la Costa degli Dei è tra i luoghi più visitati d’Italia durante il periodo estivo. Sono tanti i gioielli naturali che rendono questo territorio, che va da Pizzo Calabro a Nicotera, così gettonato. Tra questi spicca il litorale di Capo Vaticano, dominato dal borgo di Ricadi, arroccato su un suggestivo promontorio da cui si può godere di una vista magica sul Mar Tirreno.

        A Capo Vaticano ci si può rilassare sulle spiagge libere e incontaminate o si può approfittare dei tanti villaggi e residence che offrono comfort e intrattenimento ai loro ospiti. E chi vuole scoprire qualcosa in più sul territorio può contare sul Mu.Ri, il museo Civico del Comune di Ricadi, diviso in cinque poli espositivi dislocati sul territorio: il Museo del Mare a Capo Vaticano, il Museo della Cipolla a Capo Vaticano, il Museo delle Torri a Torre Marrana di Brivadi, il Museo dell'arte Contadina a Ricadi e il Museo Antropologico e Paleontologico a Santa Domenica.
      </p>
      <img src={capovaticano01} alt="Scilla" />
      <p>
        Da non perdere è anche il sentiero panoramico di Capo Vaticano, un percorso da fare a piedi a 100 metri dal livello del mare. Arrivate fino al faro e fermatevi sulla sua terrazza naturale per godere di tutto lo splendore della costa calabrese, dalle spiagge di Grotticelle alla piccola Baia di S. Maria.
      </p>
      <img src={capovaticano02} alt="Scilla" />



    </div>
  );
}

export default CapoVaticano;



