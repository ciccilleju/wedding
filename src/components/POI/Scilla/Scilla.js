import React from 'react';
import { useTranslation } from 'react-i18next';
import scilla01 from '../../../assets/POI/scilla/scilla01.jpg';
import scilla02 from '../../../assets/POI/scilla/scilla02.webp';
import styles from '../Poi.module.scss';

const Scilla = () => {

  const { t } = useTranslation();
  return (
    <div className={styles.poi}>
      <h2> Scilla</h2>

      <p>
        sorge su un promontorio a picco sul mare della Costa Viola, in Calabria. Il nome ricorda il mostro marino della mitologia greca. Qui giunsero greci, romani e poi i normanni che lasciarono il Castello di Ruffo sulla rocca che domina il paese.

        Da non perdere la chiesa di San Rocco, patrono della città, nel Quartiere San Giorgio, pittoresco angolino di casette colorate costruite a ridosso degli scogli. La chiesa dello Spirito Santo a Scilla Grande è l’unico edificio sopravvissuto ai terremoti del 1783 e del 1908. Il cuore di Scilla è Chianalea con viette che scendono fino al mare e le barche riparate ai lati dei vicoli.

        Amate la natura? Visitate le Grotte di Tremusa poco fuori dal centro abitato, poi rilassatevi sulla spiaggia bianca di Marina Grande. Poco lontano si trova la scogliera di Punta Pacì, paradiso per lo snorkeling.

        Non lontano da Scilla si trova il borgo marinaro di Favazzina, noto per la varietà di limone verdello coltivato qui. Arrivate al tramonto per scoprire perché questo tratto di litorale si chiama Costa Viola: è il colore di cui si tingono il mare e il cielo quando scende il sole.

      </p>
      <img src={scilla01} alt="Scilla" />
      <p>Non avrete bisogno di fare un solo passo da casa per godervi il Mar Tirreno a Chianalea di Scilla. Il grappolo di abitazioni è costruito direttamente sulla roccia a ridosso dell’acqua di un blu intenso. E se la più famosa Scilla, vicinissima, è una vera e propria località turistica, a Chianalea per molti mesi all’anno sarete soltanto voi e i pescatori a godere del clima mite e del suono delle onde. Farete amicizia con questi tenaci lavoratori, che vi terranno da parte il miglior pescato e magari vi proporranno un giro in barca. Potrete mordere un panino con il pesce spada comperato in un chiosco, una specialità locale, e sorseggiare un caffè in un localino con vista sulle vicine Isole Eolie, in Sicilia. La cucina a piccoli prezzi vi delizierà; non troverete solo specialità di mare, ma anche di terra, con il caciocavallo e la ‘nduja: coppia di re e regina tra i formaggi e i salumi della Calabria. Quiete e silenzio avvolgono il paesino, e una passeggiata verso il Castello di Ruffo diventerà una sana abitudine, anche per godersi il panorama. Il riposo in un luogo spettacolare è la promessa mantenuta da questo piccolo borgo che molti definiscono la “Venezia del sud”.
      </p>
      <img src={scilla02} alt="Scilla" />



    </div>
  );
}

export default Scilla;



