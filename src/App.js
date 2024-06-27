import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/Home';
import Details from './components/Details';
import Schedule from './components/Schedule';
import Travel from './components/Travel';
import Accommodation from './components/Accommodation';
import Gifts from './components/Gifts';
import POI from './components/POI/POI';
import RSVP from './components/RSVP';
import Contact from './components/Contact';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import AccommodationHungary from './components/AccommodationHungary';
import UserManagement from './components/UsersManagement/UserManagement';
import Tonnara from './components/POI/Tonnara/Tonnara';
import Aspromonte from './components/POI/Aspromonte/Aspromonte';
import ReggioCalabria from './components/POI/ReggioCalabria/ReggioCalabria';
import Tropea from './components/POI/Tropea/Tropea';
import Scilla from './components/POI/Scilla/Scilla';
import CapoVaticano from './components/POI/CapoVaticano/CapoVaticano';



function App() {

  return (
    <AuthProvider>
      <Router>
        <Header />
        <main className="max-w-screen-xl mx-auto">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/details" element={
              <Details />
            } />
            <Route path="/schedule" element={
              <Schedule />
            } />
            <Route path="/travel" element={
              <Travel />
            } />
            <Route path="/accommodation" element={
              <PrivateRoute roles={['guest_italy', 'admin']}>
                <Accommodation />
              </PrivateRoute>
            } />
            <Route path="/accommodation-hungary" element={
              <PrivateRoute roles={['guest_hungary', 'admin']}>
                <AccommodationHungary />
              </PrivateRoute>
            } />
            <Route path="/gifts" element={
              <Gifts />
            } />
            <Route path="/poi" element={
              <POI />
            } />
            <Route path="/tonnara" element={
              <Tonnara />
            } />
            <Route path="/aspromonte" element={
              <Aspromonte />
            } />
            <Route path="/reggio-calabria" element={
              <ReggioCalabria />
            } />
            <Route path="/tropea" element={
              <Tropea />
            } />
            <Route path="/scilla" element={
              <Scilla />
            } />
            <Route path="/capo-vaticano" element={
              <CapoVaticano />
            } />
            <Route path="/rsvp" element={
              <PrivateRoute roles={['guest', 'guest_italy', 'guest_hungary', 'admin']}>
                <RSVP />
              </PrivateRoute>
            } />
            <Route path="/contact" element={
              <Contact />
            } />
            <Route path="/logout" element={<Logout />} />
            <Route path="/users" element={
              <PrivateRoute roles={['admin']}>
                <UserManagement />
              </PrivateRoute>
            } />

          </Routes>

        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;
