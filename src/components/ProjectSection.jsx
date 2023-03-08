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
        <section className="projectSection" id="projectSection">

                <h2 className="sectionTitle">Proyects</h2>
                
                <p className="desc">Proyectos interezantes que he desarrollado, esta lista se ira actualizando</p>

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

            </section>
     );
}
 
export default ProjectSection;