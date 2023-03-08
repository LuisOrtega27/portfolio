import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



let defaultInputs = {emailBusiness:'', emailMessage: ''}



const ContactSection = () => {
    
    let emailMask= 'a1ca623b-9c37-408a-a4c9-ad00ec5cf03c'

    const [inputs, setInputs] = useState(defaultInputs)

    const handleChange = (e)=>{
        let value = e.target.value
        setInputs({...inputs, [e.target.id]: value})    
    }

    

    return ( 
        <section className="contactSection" id="contactSection">
                
            <h2 className="sectionTitle">Contact</h2>    
            
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
                                <span className='lavelContent'>Titulo</span>
                            </label>
                        </div>


                        <div className='textAreaGroup'>
                            <textarea id="emailMessage" placeholder='Comentario' name='emailMessage' required onChange={handleChange}/>
                            <div className='bg-border'></div>
                            <label htmlFor="emailMessage" className='lavelContent'>
                                <span className='lavelContent'>Mensaje</span>
                            </label>
                        </div>

                        <input name="_formsubmit_id" type="text" style={{display: 'none'}} />

                        <div className="formBtnArea">
                            <input type="submit" className="emailBtn emailSubmit"/>
                            <input type="reset" className="emailBtn emailReset"/>
                        </div>

                    </form>
                </div>

            </div>

        </section>
    );
}
 
export default ContactSection;