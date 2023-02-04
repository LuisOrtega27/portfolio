import React from "react";
import './css/SkillMeter.css'

const SkillMeter = ({skillToolTip, skillIcon, skillRate})=>{
    
    let rotationDegree = 0 
    
    const convertRate= ()=>{
        rotationDegree= 360 * skillRate / 100
    }
    convertRate()

    const handleRate1= ()=>{
        if(skillRate >= 50) return {transform: `rotate(180deg)`}
        else return {transform: `rotate(${rotationDegree}deg)`}
    }
    const handleRate2= ()=>{
        if(skillRate > 50) return {
            display: 'inline',
            transform: `rotate(${rotationDegree}deg)`
        }
    }
    
    return(
        <div className={'skillMeter'} >

            <div className="mid1" style={
                handleRate1()}></div>
            
            <div className="mid2" style={handleRate2()}></div>

            <div className="halfHidder"></div>

            <div className="skillContainer">
                <img className="skillIcon" src={skillIcon} alt={skillIcon}/>
            </div>

        </div>
    )
}

export default SkillMeter;