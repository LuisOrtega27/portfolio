import React, { useContext, useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LangContext from '../context/LangContext';



let defaultInputs = {emailBusiness:'', emailMessage: ''}



const ContactSection = () => {

    const {texts} = useContext(LangContext)
    const {affair, message, submitButton, resetButton} = texts.mainArea.contactSection.form
    
    
    
    let emailMask= 'a1ca623b-9c37-408a-a4c9-ad00ec5cf03c'

    const [inputs, setInputs] = useState(defaultInputs)

    const handleChange = (e)=>{
        let value = e.target.value
        setInputs({...inputs, [e.target.id]: value})    
    }

    

    return ( 
            
        <div className="contactContainer">
            
            <div className="iconArea" id="iconArea">
                <input type='checkbox' className='hiddenCheck' id='emailIconCheck'/>
                <label htmlFor='emailIconCheck'>  
                    <FontAwesomeIcon icon={faEnvelope} className={`emialIcon`}/>
                </label>
            </div>

            <div className="formArea" id="formArea">
                
                <form id='contactform' action={`https://formsubmit.io/send/${emailMask}`} method='POST'>
                                
                    <div className='inputGroup'>
                        <input type="text" id="emailBusiness" className='emailInput' autoComplete='off' name='emailBusiness' required onChange={handleChange}/>
                        <label htmlFor="emailBusiness" className='inputLabel'>
                            <span className='lavelContent'>{affair}</span>
                        </label>
                    </div>


                    <div className='textAreaGroup'>
                        <textarea id="emailMessage" placeholder={message} name='emailMessage' required onChange={handleChange}/>
                        <div className='bg-border'></div>
                        <label htmlFor="emailMessage" className='lavelContent'>
                            <span className='lavelContent'>{message}</span>
                        </label>
                    </div>

                    <input name="_formsubmit_id" type="text" style={{display: 'none'}} />

                    <div className="formBtnArea">
                        <input type="submit" className="emailBtn emailSubmit" value={submitButton}/>
                        

                        <input type="reset" className="emailBtn emailReset" value={resetButton}/>
                    </div>

                </form>
            </div>

        </div>

    );
}
 
export default ContactSection;