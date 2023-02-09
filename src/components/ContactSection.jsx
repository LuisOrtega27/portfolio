import React from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
    
    return ( 
        <section className="contactSection" id="contactSection">
                
                <h2 className="sectionTitle">Contact</h2>    
                
                <div className="contactContainer">
                    
                    <div className="iconArea" id="iconArea">
                        <input type='checkbox' className='hiddenCheck' id='emailIconCheck'/>
                        <label htmlFor='emailIconCheck'>  
                            <FontAwesomeIcon icon={faEnvelope} className={'emialIcon'}/>
                        </label>
                    </div>

                    <div className="formArea" id="formArea">
                        <form action="#">
                            
                            <div className='inputGroup'>
                                <input type="text" id="emailBusiness" className='emailInput' required autoComplete='off'/>
                                <label htmlFor="emailBusiness" className='inputLabel'>
                                    <span className='lavelContent'>Titulo</span>
                                </label>
                            </div>


                            <div className='textAreaGroup'>
                                <textarea id="emailMessage" required placeholder='Comentario'/>
                                <div className='bg-border'></div>
                                <label htmlFor="emailMessage" className='lavelContent'>
                                    <span className='lavelContent'>Mensaje</span>
                                </label>
                            </div>

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