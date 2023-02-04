import React from 'react';

import ProjectViewer from './ProjectViewer'

const ProjectSection = () => {

    return ( 
        <section className="projectSection" id="projectSection">

                <h2 className="sectionTitle">Proyects</h2>
                
                <p className="desc">Proyectos interezantes que he desarrollado, esta lista se ira actualizando</p>

                    <ProjectViewer 
                        thumbnail={'./imgs/Mistborn-icon.jpg'}
                        description={'lo que sea mucho texto'}
                        path={'https://luisortega27.github.io/wordle-counterfeit.github.io/'}
                        title={'Wordle counterfeit'}
                    />
                    <ProjectViewer 
                        thumbnail={'./imgs/Mistborn-icon.jpg'}
                        description={'lo que sea mucho texto'}
                        path={'https://luisortega27.github.io/wordle-counterfeit.github.io/'}
                        title={'Wordle counterfeit'}
                    />
                    <ProjectViewer 
                        thumbnail={'./imgs/Mistborn-icon.jpg'}
                        description={'lo que sea mucho texto'}
                        path={'https://luisortega27.github.io/wordle-counterfeit.github.io/'}
                        title={'Wordle counterfeit'}
                    />
                    <ProjectViewer 
                        thumbnail={'./imgs/Mistborn-icon.jpg'}
                        description={'lo que sea mucho texto'}
                        path={'https://luisortega27.github.io/wordle-counterfeit.github.io/'}
                        title={'Wordle counterfeit'}
                    />
                    <ProjectViewer 
                        thumbnail={'./imgs/Mistborn-icon.jpg'}
                        description={'lo que sea mucho texto'}
                        path={'https://luisortega27.github.io/wordle-counterfeit.github.io/'}
                        title={'Wordle counterfeit'}
                    />

            </section>
     );
}
 
export default ProjectSection;