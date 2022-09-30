import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header/header';
import SubReddits from './Components/SubReddits/SubReddits'
import Reddit from './Components/Reddit/Reddit';
import {useDispatch} from 'react-redux';


function App() {
  const [visibleSubMenu, setVisibleSubMenu] = useState(true);
  const [width, setWidth] = useState(window.innerWidth)


const setVisibility=()=>{
  setVisibleSubMenu(!visibleSubMenu)
}

useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
});

console.log(width);


  return (
    <div className="App">
      <nav>
      <Header setVisibility={setVisibility} visibleSubMenu={visibleSubMenu}/>
      </nav>
      <div className='main-media'>
      <Reddit className="reddit-section"/>
      {width < 640 ? (visibleSubMenu ? <SubReddits className="subreddits-section"  setVisibleSubMenu={setVisibleSubMenu}/> : null) : <SubReddits className="subreddits-section" setVisibleSubMenu={setVisibleSubMenu}/> }
      </div>
    </div>
  );
}

export default App;
