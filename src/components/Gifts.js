import React from 'react';
import { useTranslation } from 'react-i18next';

const Gifts = () => {

  const { t } = useTranslation();


  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      <section>
        <h2>Regali</h2>
        <p className="text-2xl md:text-xl  mb-8 relative z-10">

          Per contribuire ai nostri prossimi passi assieme:<br />



          Dall'Italia/Europa:<br />

          IBAN: XXXXXXX<br />

          BIC/SWIFT: INGBNL2A
        </p>
      </section></div>
  );
}

export default Gifts;
