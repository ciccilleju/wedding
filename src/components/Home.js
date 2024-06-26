import React from 'react';
import noi from '../assets/noi.jpeg';
const Home = () => {
  return (
    <section>
      <h2>Benvenuti al Nostro Matrimonio</h2>
      <p>Siamo felicissimi di condividere con voi questo giorno speciale. Grazie per essere parte della nostra vita!</p>
      <img src={noi} alt="Foto di noi due" />
    </section>
  );
}

export default Home;
