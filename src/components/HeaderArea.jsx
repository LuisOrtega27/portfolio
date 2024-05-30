import React, { useContext } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import LangContext from "../context/LangContext";

import showCv from '../helpers/helpShowCv'


const HeaderArea = ({NavMenu, theme})=>{

    const {texts} = useContext(LangContext)

    const {mySpeech, downloadCv} = texts.headerArea.myInfo



    
    return(
        <header className={`mainHeader ${theme}`} id="mainHeader">

            {/* Menu de navegacion */}
            {NavMenu}

            {/* 
                Espacio para respetar 
                la posicion del menu 
                
            */}
            <div className="navSpacer"></div>
            {/* ---------------------------------------- */}
            
            <div className="photoContainer">
                <picture className="pictureFrame">
                    <img src="./imgs/myPicture1.jpg" alt="Mistborn"/>
                </picture>
            </div>

            <div className="myInfoContainer">

                <p className="myInfo myName">Luis Ortega</p>

                <p className="myInfo myLocation">
                    <FontAwesomeIcon className="icon-left" icon={faLocationDot}/> 
                    Caracas - Venezuela
                </p>
                
                <p className="myInfo myNumber"> 
                    <FontAwesomeIcon className="icon-left" icon={faPhone}/> 
                    0412-512-5784
                </p>

                <p className="myInfo myEmail"> 
                    <FontAwesomeIcon className="icon-left" icon={faEnvelope}/> 
                    LFortega0625@gmail.com
                </p>
                
            </div>
            
            <div className="speechContainer">
            
                <p className="mySpeech">{mySpeech}</p>
                
                <button className="downloadCv" onClick={showCv}>
                    {downloadCv}
                    <FontAwesomeIcon className="icon-right" icon={faFileArrowDown} /> 
                    
                </button>

            </div>

        </header>
    )

}


export default HeaderArea
