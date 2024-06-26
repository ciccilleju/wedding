import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const RSVP = () => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    guests: 0,
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    updateUser();
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      setFormData(prevState => ({
        ...prevState,
        name: user.username,
        attendance: user.attendance
      }));
    }
  }, [user]);

  const updateUser = async () => {
    try {
      const res = await axios.put(`/api/users/${user._id}`, formData);
      console.log(res);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };


  const handleChange = (e) => {
    const { id, value } = e.target;
    const newValue = value === "true";
    setFormData(prevState => ({
      ...prevState,
      [id]: id === 'attendance' ? value === 'true' : value
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
          <option value={true}>Sì</option>
          <option value={false}>No</option>

        </select>

        {formData.attendance && (
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
            <label htmlFor="notes">{t('notes')}:</label>
            <textarea
              id="notes"
              value={formData.notes}
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
