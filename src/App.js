import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import Schedule from './components/Schedule';
import Travel from './components/Travel';
import Accommodation from './components/Accommodation';
import Gifts from './components/Gifts';
import POI from './components/POI';
import RSVP from './components/RSVP';
import Contact from './components/Contact';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';






function App() {



  return (
    <AuthProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/details" element={
              <PrivateRoute roles={['guest', 'admin']}>
                <Details />
              </PrivateRoute>
            } />
            <Route path="/schedule" element={
              <PrivateRoute roles={['guest', 'admin']}>
                <Schedule />
              </PrivateRoute>
            } />
            <Route path="/travel" element={
              <PrivateRoute roles={['guest', 'admin']}>
                <Travel />
              </PrivateRoute>
            } />
            <Route path="/accommodation" element={
              <PrivateRoute roles={['guest', 'admin']}>
                <Accommodation />
              </PrivateRoute>
            } />
            <Route path="/gifts" element={
              <PrivateRoute roles={['guest', 'admin']}>
                <Gifts />
              </PrivateRoute>
            } />
            <Route path="/poi" element={
              <PrivateRoute roles={['guest', 'admin']}>
                <POI />
              </PrivateRoute>
            } />
            <Route path="/rsvp" element={
              <PrivateRoute roles={['guest', 'admin']}>
                <RSVP />
              </PrivateRoute>
            } />
            <Route path="/contact" element={
              <PrivateRoute roles={['guest', 'admin']}>
                <Contact />
              </PrivateRoute>
            } />
            <Route path="/logout" element={<Logout />} />
          </Routes>

        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;
