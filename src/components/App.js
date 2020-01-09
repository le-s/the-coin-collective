import React from 'react';
import CoinIndex from './coin_index.jsx';
import Navbar from './navbar';
// import Footer from './footer';

import '../stylesheets/index.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <CoinIndex />
    </div>
  );
}

export default App;
