import React, { useCallback, useEffect, useState } from "react";
import './App.css';

import HeaderArea from './components/HeaderArea';
import MainArea from './components/MainArea';
import FooterArea from './components/FooterArea';
import NavMenu from "./components/NavMenu";
import {LangProvider} from "./context/LangContext";


function App() {

  useEffect(()=>{

  },[])


  const [theme, setTheme] = useState(null)

  const handleTheme = (isDark)=>{
    if(isDark){
      setTheme('dark-theme')
    }else{
      setTheme('light-theme')
    }
  }



  return (
    <div className={`App ${theme}`}>
      <LangProvider>

        <HeaderArea NavMenu={<NavMenu handleTheme={handleTheme}/>} />
        
        <MainArea />
        
        <FooterArea />
      
      </LangProvider>
    </div>
  );
}

export default App;
