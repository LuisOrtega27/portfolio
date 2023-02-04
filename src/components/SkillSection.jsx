import React from 'react';

import SkillMeter from './SkillMeter';

const SkillSection = ()=>{

    return(

        <section className="skillSection" id="skillSection">
                
                <h2 className="sectionTitle">Skills</h2>
                
                <p className='desc'>Actualmente mis metas de desarrollo en el area de crecimiento laboral estan centrados en el frontend</p>

                <div className="skillsContainer">
                    
                    <div className="row rowEven">
                        <SkillMeter skillIcon={'./imgs/html-edit-icon.png'} skillToolTip={'HTML'} skillRate={90} />
                        <SkillMeter skillIcon={'./imgs/css-edit-icon.png'} skillToolTip={'CSS'} skillRate={90} />
                        <SkillMeter skillIcon={'./imgs/js-edit-icon.png'} skillToolTip={'JS'} skillRate={60} />
                    </div>
                    
                    <div className="row rowOdd">
                        <SkillMeter skillIcon={'./imgs/react-edit-icon.png'} skillToolTip={'React'} skillRate={50} />
                        <SkillMeter skillIcon={'./imgs/bs-edit-icon.png'} skillToolTip={'BS'} skillRate={60} />
                    </div>

                    <div className="row rowOdd">
                        <SkillMeter skillIcon={'./imgs/php-edit-icon.png'} skillToolTip={'Git'} skillRate={40} />
                    </div>

                </div>

            </section>

    )

}

export default SkillSection;