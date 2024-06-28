import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const { t } = useTranslation();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      <section>
        <h2>{t('contact')}</h2>
        <p>Per qualsiasi domanda, contattaci a: [tuo-email]@esempio.com</p>
      </section>
    </div>
  );
}

export default Contact;
