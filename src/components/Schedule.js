import React from 'react';
import { useTranslation } from 'react-i18next';

const Schedule = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <section className="mb-8">
        <h2 className='text-center'>Programma della Giornata</h2>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">{t('celebrationDate')}</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="mr-2 text-gray-500">09:00</span>
            <p className="text-gray-700">
              Dalle ore 09 è possibile stare in spiaggia fino alle 16 circa, avremo ombrelloni prenotati presso {t('celebrationPlace')}
            </p>
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-gray-500">18:00</span>
            <p className="text-gray-700"> rito civile</p>
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-gray-500">19:30</span>
            <p className="text-gray-700"> aperitivo</p>
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-gray-500">20:30</span>
            <p className="text-gray-700"> cena</p>
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-gray-500">23:30</span>
            <p className="text-gray-700">  torta</p>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Domenica 07 Settembre 2025</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="mr-2 text-gray-500">09:00</span>
            <p className="text-gray-700">Dalle ore 09 è possibile stare in spiaggia, avremo ombrelloni riservati tutto il giorno</p>
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-gray-500">18:00</span>
            <p className="text-gray-700">Ore 18: brindisi in spiaggia per salutarci</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Schedule;
