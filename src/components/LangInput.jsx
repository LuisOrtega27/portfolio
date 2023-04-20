import React, { useContext } from 'react';
import LangContext from '../context/LangContext';

const LangInput = ()=>{

    const {lang, handleLang, texts} = useContext(LangContext)

    const {legend, languages} = texts.headerArea.navMenu.langInput

    return(
        <>
            <select name="lang" id="lang-input" value={lang} onChange={handleLang}>
                <option value="none">-- {legend} --</option>
                <option value="es">{languages.spanish}</option>
                <option value="en">{languages.english}</option>
            </select>
        </>
    )

}

export default LangInput