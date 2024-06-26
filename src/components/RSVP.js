import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import { AuthContext } from '../context/AuthContext';

const RSVP = () => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    guests: 0,
    intollerances: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  useEffect(() => {
    if (user) {
      setFormData(prevState => ({
        ...prevState,
        name: user.username
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
    <section>
      <h2 className="text-3xl font-bold underline">RSVP</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{t('name')}:</label>
        <input
          type="text"
          disabled
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="attendance">{t('attendance')}?</label>
        <select
          id="attendance"
          value={formData.attendance}
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="yes">Sì</option>
          <option value="no">No</option>
        </select>

        {formData.attendance === 'yes' && (
          <>
            <label htmlFor="guests">{t('guests')}?</label>
            <select
              id="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <label htmlFor="intollerances">{t('intollerances')}:</label>
            <textarea
              id="intollerances"
              value={formData.intollerances}
              onChange={handleChange}
              required
            />
          </>
        )}

        <Button type="submit" variant="primary">Invia</Button>
      </form>
    </section>
  );
};

export default RSVP;
