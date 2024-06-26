import React, { useState } from 'react';

const RSVP = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="attendance">Parteciperai?</label>
        <select id="attendance" value={attendance} onChange={(e) => setAttendance(e.target.value)}>
          <option value="yes">Sì</option>
          <option value="no">No</option>
        </select>
        <button type="submit">Invia</button>
      </form>
    </section>
  );
}

export default RSVP;
