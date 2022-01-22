import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home"
import LeftSide from 'components/LeftSide';
import RightSide from 'components/RightSide';

function App() {
  return (
    <div className='wrapper'>
    <LeftSide/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    <RightSide/>
    </div>
  );
}

export default App;
