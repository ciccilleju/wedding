import React from 'react';
import { useTranslation } from 'react-i18next';

const Travel = () => {

  const { t } = useTranslation();
  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      <section>
        <h2 className='mb-4 text-center'>Informazioni di viaggio</h2>
      </section>

    </div>
  );
}

export default Travel;
