import React from "react";


const ProyectViewer = ({thumbnail, path, title})=>{

    return(
        <div className="viewer">

            <picture>
                <img src={thumbnail} alt={title} />
            
                <a href={path} target={'_blank'} rel="noreferrer">{'>> Ir al proyecto'}</a>
            
            </picture>

                <h4>{title}</h4>

        </div>
    )
}

export default ProyectViewer