import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";


const HeaderArea = ({NavMenu})=>{
    
    return(
        <header className="mainHeader" id="mainHeader">

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
                    <img src="./imgs/Mistborn-icon.jpg" alt="Mistborn"/>
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
            
                <p className="mySpeech">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quibusdam repellat dolores sed, architecto cumque vitae, molestias consequuntur nulla porro quia odit molestiae facilis numquam eveniet iusto impedit? Quasi, provident!</p>
                
                <button className="downloadCv">
                    Curriculum
                    <FontAwesomeIcon className="icon-right" icon={faFileArrowDown}/> 
                    
                </button>

            </div>

        </header>
    )

}


export default HeaderArea