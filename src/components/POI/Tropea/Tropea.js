import React from 'react';
import { useTranslation } from 'react-i18next';
import tropea from '../../../assets/POI/tropea/tropea.jpg';
import styles from '../Poi.module.scss';
import TextImage from '../../text-image/TextImage';

const Tropea = () => {

  const { t } = useTranslation();
  return (
    <div className={styles.poi}>
      <h2 className="text-3xl font-bold underline">Tropea</h2>

      <TextImage
        title={'Tropea'}
        address={'89861 VV'}
        maxHeight={300}
        children={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12459.509726082722!2d15.873664578391413!3d38.67468483617541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13157123bc33f243%3A0x23374535c06835f7!2s89861%20Tropea%20VV!5e0!3m2!1sit!2sit!4v1719560419599!5m2!1sit!2sit" width="400" height="180" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        }
        text={'Tropea, cittadina nota soprattutto per le sue spiagge bellissime, per i fondali ideali per chi ama le esplorazioni subacquee e per la sua gastronomia. È nota in tutto il mondo, infatti la Cipolla di Tropea, unica per la sua dolcezza, una dolcezza favorita dal clima e dalla vicinanza del mare. Il mare fu, nella sua storia, anche fonte di pericoli: per difenderla, gli Arabi costruirono la Torre Lunga sulla parte più alta della roccia, i Bizantini le mura e gli Aragonesi la Torre Maestra.'} />


      <img src={tropea} alt="Tropea" />





    </div>
  );
}

export default Tropea;



