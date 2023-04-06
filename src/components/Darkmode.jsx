import React, { useContext, useEffect, useState } from 'react';
import LangContext from '../context/LangContext';


const Darkmode = ({handleTheme})=>{
    
    const [isDark, setIsDark] = useState(null)
    const {texts} = useContext(LangContext)
    const {text} = texts.headerArea.navMenu.darkMode
    
    useEffect(()=>{

        if(isDark == null){
            
            let storedItem = window.localStorage.getItem('darkTheme')

            if(storedItem !== null){

                storedItem = JSON.parse(storedItem)
                storedItem = storedItem.darkTheme

                setIsDark(storedItem)

                handleTheme(storedItem)

            }
        }
        
    }, [isDark])
    
    
    
    
    const handleIsDark = ()=>{
        
        setIsDark(!isDark)

        window.localStorage.setItem('darkTheme', JSON.stringify({darkTheme: !isDark}))

        handleTheme(!isDark)


    }
    
    


    return(
        <>
            <input type="checkbox" name="darkMode" id="darkMode" 
                hidden 
                defaultChecked={isDark} 
                onClick={ ()=> {
                    handleIsDark()
                } }
            />

            <label htmlFor="darkMode" className="darkmode-label">
                <div className="darkmode-dot"></div>
                <span className="pseudo-label">{text}</span>
            </label>
        </>
    )

}

export default Darkmode