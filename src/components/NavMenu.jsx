import React, { useState } from "react";


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


const NavMenu = ()=>{

    const [menuOpen, setMenuOpen]  = useState(false)
    const [icon, setIcon] = useState(faBars)
    
    const [menuStyle, setMenuStyle] = useState('mainNavClose')

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

    return(
        <nav className={`mainNav`}>
            
            <div className="mainMenuArea">
            
                <div className="spacer sp1">
                    <FontAwesomeIcon icon={faCode}/>
                </div>

                <div className="spacer sp2"></div>

                <button id="menuBtn" onClick={handleMenuOpen}>
                    <FontAwesomeIcon icon={ icon }/>
                </button>

                <ul className={`mainMenu ${menuStyle}`} onClick={handleMenuOpen}>
                    
                    <li><a href="#mainHeader">
                        inicio <FontAwesomeIcon className="icon-right" icon={faHouse}/>
                    </a></li>

                    <li><a href="#skillSection">
                        habilidades <FontAwesomeIcon className="icon-right" icon={faBolt}/>
                    </a></li>
                    
                    <li><a href="#projectSection">
                        proyectos <FontAwesomeIcon className="icon-right" icon={faDiagramProject}/>
                    </a></li>
                    
                    <li><a href="#contactSection">
                        contacto <FontAwesomeIcon className="icon-right" icon={faAddressBook}/>
                    </a></li>

                    <li className="cvContainer"><button className="downloadCv">
                            Curriculum  
                            <FontAwesomeIcon className="icon-right" icon={faFileArrowDown}/>
                    </button></li>

                </ul>
            
            </div>

        </nav>
    )

}

export default NavMenu;