import React, { useContext } from "react";


import SkillSection from "./SkillSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import MySection from "./MySection";
import LangContext from "../context/LangContext";



const MainArea = ()=>{

    const {texts} = useContext(LangContext)

    const {skillsSectionTitle, skillsSectionDescription} = texts.mainArea.skillsSection
    const {projectsSectionTitle, projectsSectionDescription} = texts.mainArea.projectsSection
    const {conactSectionTitle} = texts.mainArea.contactSection

    
    return(

        <main>
            
            <MySection id={'skillSection'} title={skillsSectionTitle} desc={skillsSectionDescription}>
                <SkillSection/>
            </MySection>

            <MySection id={'projectSection'} title={projectsSectionTitle} desc={projectsSectionDescription
}>
                <ProjectSection/>
            </MySection>

            <MySection id={'contactSection'} title={conactSectionTitle}>
                <ContactSection/>
            </MySection>

        </main>

)

}


export default MainArea