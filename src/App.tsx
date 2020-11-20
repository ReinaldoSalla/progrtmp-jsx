/*
<Banner /> => html img
<User /> => css background img and Sharing state
<Statistics /> => html tables
<Navbar />
<Services />
<Footer />
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

// import React from 'react';

// const App = () => (
//   <h1></h1>
// )