import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import SubReddits from './Components/SubReddits/SubReddits'
import Reddit from './Components/Reddit/Reddit';

function App() {
  return (
    <div className="App">
      <nav>
      <Header />
      </nav>
      <div className='main-media'>
      <Reddit />
      <SubReddits />
      </div>
    </div>
  );
}

export default App;
