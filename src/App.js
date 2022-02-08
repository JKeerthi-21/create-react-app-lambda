import logo from './logo.svg';
import './App.css';
import React from 'react';
import MemeGenerator from './MemeGenerator';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
