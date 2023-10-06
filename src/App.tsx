import React from 'react';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';

function App() {
  return (
    <div className="app-wrap">
     <Header/>
     <Hero/>
     <Products/>
    </div>
  );
}

export default App;
