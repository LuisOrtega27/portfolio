import React from "react";


const ProyectViewer = ({thumbnail, path, title})=>{

/* Experimento fallido :p
const scrollHandler= (e)=>{
    
    e.stopPropagation()
    
    let target= e.target
    let cy = target.getBoundingClientRect().y
    
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
    
    if(cy < 0){
        
        let newCoord = currentScroll - 150
        
        window.scroll({
                top: newCoord, 
                left: 0, 
                behavior: 'smooth'
              })
            experiment
             
            inter= setInterval(() => {
                window.scroll(0, currentScroll--)
                console.log(currentScroll)
                
                if(currentScroll == newCoord){
                    clearInterval(inter)
                }
                
            }, 100);
            
            
           
        }else if(cy > 200){
            todavia no funciona :'v 
             let interval = setInterval(()=>{
                
                     window.scroll({
                             top: currentScroll+=50, 
                     left: 0, 
                     behavior: 'smooth'
                 })

                 let currentY = target.getBoundingClientRect().y
                 if(currentY < 150) clearInterval(interval)
            
             }, 100)
            
            
        }
        console.log(cy)
    }
    */    
    
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