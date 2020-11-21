/*
<User /> => css background img and Sharing state
<Statistics /> => html tables
<Navbar />
<Services />
<Footer />
html imgs mdn or w3c
IntersectionObserver article
progressive img manipulation
<Banner /> => html img
*/

import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Profile from './components/Profile';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Banner />
    <Profile />
  </>
);

export default App;