import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const { t } = useTranslation();

  return (
    <section>
      <h2 className="text-3xl font-bold underline">{t('contact')}</h2>
      <p>Per qualsiasi domanda, contattaci a: [tuo-email]@esempio.com</p>
    </section>
  );
}

export default Contact;
