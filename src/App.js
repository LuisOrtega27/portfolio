import React from "react";
import './App.css';

import HeaderArea from './components/HeaderArea';
import MainArea from './components/MainArea';
import FooterArea from './components/FooterArea';
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <div className="App">

      <HeaderArea NavMenu={
        <NavMenu/>
      } />
      
      <MainArea/>
      
      <FooterArea/>

    </div>
  );
}

export default App;
