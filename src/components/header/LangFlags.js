import enFlag from '../../assets/flags/en-flag.png';
import itFlag from '../../assets/flags/it-flag.png';
import huFlag from '../../assets/flags/hu-flag.png';
import { useTranslation } from 'react-i18next';



const LangFlags = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <div className="language-switcher">
      <span onClick={() => changeLanguage('en')}>
        <img src={enFlag} alt="English" />
      </span>
      <span onClick={() => changeLanguage('it')}>
        <img src={itFlag} alt="Italiano" />
      </span>
      <span onClick={() => changeLanguage('hu')}>
        <img src={huFlag} alt="Magyar" />
      </span>
    </div>
  );
};

export default LangFlags;
