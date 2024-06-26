import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const RSVP = () => {
  const [name, setName] = useState('');
  const { t } = useTranslation();
  const [attendance, setAttendance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
  };

  return (
    <section>
      <h2>RSVP</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="phone">Telefono:</label>
        <input type="text" id="phone" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="attendance">Parteciperai?</label>
        <select id="attendance" value={attendance} onChange={(e) => setAttendance(e.target.value)}>
          <option value="yes">Sì</option>
          <option value="no">No</option>
        </select>
        <label htmlFor="guests">Quante persone?</label>
        <select id="guests" value={attendance} onChange={(e) => setAttendance(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Invia</button>
      </form>
    </section>
  );
}

export default RSVP;
