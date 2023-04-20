import React, { useContext, useState } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { 
    faCode,
    faBars, 
    faX, 
    faFileArrowDown, 
    faHouse, 
    faBolt, 
    faDiagramProject, 
    faAddressBook
} from "@fortawesome/free-solid-svg-icons";
import Darkmode from "./Darkmode";
import LangInput from "./LangInput";
import LangContext from "../context/LangContext";


import showCv from '../helpers/helpShowCv'


const NavMenu = ({handleTheme})=>{

    const [menuOpen, setMenuOpen]  = useState(false)
    const [icon, setIcon] = useState(faBars)
    const [menuStyle, setMenuStyle] = useState('mainNavClose')

    const [menuScroll, setMenuScroll] = useState(0)

    const {texts} = useContext(LangContext)

    const {links} = texts.headerArea.navMenu


    //--------- funcion para habrir y cerrar el menu --------------------------------------
    const handleMenuOpen = ()=>{    
        
        if(menuOpen){
            setIcon(faBars)
            setMenuStyle('mainNavClose')
        }else{
            setIcon(faX)
            setMenuStyle('mainNavOpen')
        }         
        setMenuOpen(!menuOpen)
    }
    //-----------------------------------------------



    //--------- controlar cuando el menu se oculta al hacer escroll --------------------------------------
    let prevScroll = window.scrollY
    
    window.addEventListener('scroll', ()=>{
        let currentScroll = window.scrollY
        if(currentScroll > prevScroll){
            setMenuScroll(-60)
        }else{
            setMenuScroll(0)
        }
        prevScroll = currentScroll
    })
    //-----------------------------------------------



    
    return(
        <nav className={`mainNav`} style={{top: menuScroll}}>
            
                <div className="spacer sp1">
                    <i>
                        <FontAwesomeIcon icon={faCode}/>
                    </i>
                </div>

                <div className="spacer sp2"></div>



                <button id="menuBtn" onClick={handleMenuOpen}>
                    <FontAwesomeIcon icon={ icon }/>
                </button>



                <ul className={`mainMenu ${menuStyle}`} onClick={handleMenuOpen}>
                    


                    <div className="confi-options">
                        <LangInput />
                        <Darkmode handleTheme={handleTheme}/>
                    </div>



                    <li><a href="#mainHeader">
                        {links.home} <FontAwesomeIcon className="icon-right" icon={faHouse}/>
                    </a></li>

                    <li><a href="#skillSection">
                        {links.skills} <FontAwesomeIcon className="icon-right" icon={faBolt}/>
                    </a></li>
                    
                    <li><a href="#projectSection">
                        {links.projects} <FontAwesomeIcon className="icon-right" icon={faDiagramProject}/>
                    </a></li>
                    
                    <li><a href="#contactSection">
                        {links.contact} <FontAwesomeIcon className="icon-right" icon={faAddressBook}/>
                    </a></li>

                    <li className="cvContainer"><button className="downloadCv" onClick={showCv}>
                        {links.downloadCv} <FontAwesomeIcon className="icon-right" icon={faFileArrowDown}/>
                    </button></li>

                </ul>
            
        </nav>
    )

}

export default NavMenu;