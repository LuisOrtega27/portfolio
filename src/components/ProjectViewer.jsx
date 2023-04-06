import React, { useContext } from "react";
import LangContext from "../context/LangContext";


const ProyectViewer = ({thumbnail, path, title})=>{

    const {texts} = useContext(LangContext)

    const link = texts.mainArea.projectsSection.link


    return(
        <div className="viewer">

            <picture>
                <img src={thumbnail} alt={title} />
            
                <a href={path} target={'_blank'} rel="noreferrer">{link}</a>
            
            </picture>

                <h4>{title}</h4>

        </div>
    )
}

export default ProyectViewer