import React from 'react';

import SkillMeter from './SkillMeter';

const SkillSection = ()=>{

    return(

        <section className="skillSection" id="skillSection">
                
                <h2 className="sectionTitle">Skills</h2>
                
                <p className='desc'>Actualmente mis metas de desarrollo en el area de crecimiento laboral estan centrados en el frontend</p>

                <div className="skillsContainer">
                    
                    <div className="row rowEven">
                        <SkillMeter skillIcon={'HTML'} skillToolTip={'HTML'} skillRate={90} />
                        <SkillMeter skillIcon={'CSS'} skillToolTip={'CSS'} skillRate={90} />
                        <SkillMeter skillIcon={'JS'} skillToolTip={'JS'} skillRate={60} />
                    </div>
                    
                    <div className="row rowOdd">
                        <SkillMeter skillIcon={'React'} skillToolTip={'React'} skillRate={50} />
                        <SkillMeter skillIcon={'BS'} skillToolTip={'BS'} skillRate={60} />
                    </div>

                    <div className="row rowOdd">
                        <SkillMeter skillIcon={'Git'} skillToolTip={'Git'} skillRate={40} />
                    </div>

                </div>

            </section>

    )

}

export default SkillSection;