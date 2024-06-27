import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Poi.module.scss';
import Card from '../Card/Card';
import tonnara from '../../assets/POI/tonnara/tonnara01.jpg';
import reggio from '../../assets/POI/reggio/reggio.jpg';
import tropea from '../../assets/POI/tropea/tropea.jpg';
import aspromonte from '../../assets/POI/aspromonte/aspromonte01.jpg';
import { Link } from 'react-router-dom';

const POI = () => {

  const { t } = useTranslation();
  return (
    <div className={styles.poi}>
      <h3 class="text-xl font-semibold text-gray-700 tracking-wider text-center"> DA NON PERDERE</h3>
      <h1 class="text-4xl font-bold text-center text-blue-600 mt-4 mb-6">
        Il meglio della Calabria
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4'>

        <Link to="/tonnara">
          <Card
            size='l'
            title='La tonnara di palmi' tag="mare"
            text='un testo di prova' caption={'Tonnara di palmi'} imgSrc={tonnara} />
        </Link>
        <Link to="/aspromonte">
          <Card
            title="Il parco nazionale dell'Aspromonte" tag="montagna"
            text='un testo di prova' caption={'Aspromonte'} imgSrc={aspromonte} />
        </Link>
        <Link to="/reggio-calabria">
          <Card
            size='l'
            title="La città di Reggio Calabria" tag="città"
            text='Città dei bronzi di riace' caption={'Reggio Calabria'} imgSrc={reggio} />
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4'>

        <Link to="/tropea">
          <Card
            title='Tropea' tag="borghi"
            text='un incanto sul mare' caption={'Tropea'} imgSrc={tropea} />
        </Link>
        <Link to="/aspromonte">
          <Card
            size={'l'}
            title="Il parco nazionale dell'Aspromonte" tag="montagna"
            text='un testo di prova' caption={'Aspromonte'} imgSrc={aspromonte} />
        </Link>
        <Link to="/aspromonte">
          <Card
            title="Il parco nazionale dell'Aspromonte" tag="montagna"
            text='un testo di prova' caption={'Aspromonte'} imgSrc={aspromonte} />
        </Link>
      </div>
    </div>
  );
}

export default POI;
