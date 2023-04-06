import React, { useEffect, useState } from 'react';
import ProyectViewer from './ProjectViewer';

const ProjectSection = () => {

    const [list, setList] = useState([])

    useEffect(()=>{
        
        fetch("./assets/proyect_list.json")
        .then(res=>res.json())
        .then(res=> {
            setList(res.proyects)
        })

    },[])

    return ( 
        <>

            <div className='projectsContainer'>

                {
                    list.map( (p, index) =>{
                        return <ProyectViewer
                            key={index} 
                            thumbnail={p.thumbnail}
                            description={p.description}
                            path={p.path}
                            title={p.title}
                        />
                    })
                }

            </div>

        </>
     );
}
 
export default ProjectSection;