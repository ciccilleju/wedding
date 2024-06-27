import React from 'react';
import { useTranslation } from 'react-i18next';
import aspromonte01 from '../../../assets/POI/aspromonte/aspromonte01.jpg';
import styles from '../Poi.module.scss';

const Aspromonte = () => {

  const { t } = useTranslation();
  return (
    <div className={styles.poi}>
      <h2 className="text-3xl font-bold underline">   Parco Nazionale dell'Aspromonte</h2>

      <p>
        Ricco di bellezze naturali, valli, cascate, piccoli borghi e paesaggi mozzafiato che uniscono mare e montagna, il Parco Nazionale dell’Aspromonte è una destinazione imperdibile in Italia. Terra dalla storia antica, ricca di cultura e tradizioni radicate trasmesse di generazione in generazione, il parco possiede un'offerta turistica ampia e caratteristica tutta da scoprire.   </p>
      <img src={aspromonte01} alt="Parco Nazionale dell'Aspromonte" />
      <p>Sono 11 i sentieri che si diramano all’interno dell’Aspromonte ognuno con la sua durata e difficoltà. Il sentiero che da Samo arriva a Montalto è il più lungo con i suoi 26,11 km: consigliato ai più esperti, richiede 7.30H di cammino, anche se è possibile prevedere soste intermedie solitamente a Monte Iofri e Canovai. Il parco permette anche escursioni più semplici, come quella del sentiero che porta alle Cascate Amendolea conosciute anche come Cascate del Maesano. Lungo 1,977 km, per un tempo di percorrenza di circa 35 min, è un’immersione nella natura che tocca il suo apice quando si arriva al cospetto delle cascate con i loro salti d’acqua che si tuffano a valle.

        Altrettanto interessanti sono i 19 percorsi tematici che uniscono natura e cultura, come quello ad alta quota Gambarie - Polsi che porta al Santuario della Madonna dei Polsi. Oppure il percorso tematico San luca - Zervò che parte dalla casa natale dello scrittore Corrado Alvaro, attraversa il borgo di San Luca, raggiunge Pietra Cappa, il monolite più grande d’Europa, passa per la Valle delle Grandi Pietre e arriva a Zervò e l’ex Sanatorio Vittorio Emanuele III risalente al 1929. Per i grandi camminatori c’è Il sentiero dell’Inglese, un viaggio in 7 tappe alla scoperta della Calabria Greca ispirato al paesaggista inglese Edward Lear, che nell’800 decise di esplorare le terre del Regno delle due Sicilie.
      </p>



    </div>
  );
}

export default Aspromonte;



