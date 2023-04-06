import { createContext, useEffect, useState } from "react";

const LangContext = createContext();



let translations = {
    es: {
        headerArea:{
            navMenu:{
                links:{
                    home: 'inicio',
                    skills: 'habilidades',
                    projects: 'proyectos',
                    contact: 'contacto',
                    downloadCv: 'descargar CV'
                },
                darkMode:{
                    text: 'modo oscuro'
                },
                langInput:{
                    legend: 'lenguaje',
                    languages:{
                        spanish: 'español',
                        english: 'ingles'
                    }
                }
            },
            myInfo:{
                mySpeech: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quibusdam repellat dolores sed, architecto cumque vitae, molestias consequuntur nulla porro quia odit molestiae facilis numquam eveniet iusto impedit? Quasi, provident!',
                downloadCv: 'descargar CV'
            }
        },
        mainArea:{
            skillsSection:{
                skillsSectionTitle: 'conocimientos',
                skillsSectionDescription: 'actualmente mis metas de desarrollo en el area de crecimiento laboral estan centrados en el frontend'
            },
            projectsSection:{
                projectsSectionTitle: 'proyectos',
                projectsSectionDescription: 'proyectos interezantes que he desarrollado, ire actualizando esta lista con el tiempo.',
                link: '>> ir al proyecto'
            },
            contactSection:{
                conactSectionTitle: 'contacto',
                form: {
                    affair: 'asunto',
                    message: 'comentario',
                    submitButton: 'enviar',
                    resetButton: 'limpiar'
                }
            }
        },
        footerArea:{
            footerText: 'Tambien puedes contactarme traves de mis redes sociales.'
        }
    },
    en: {
        headerArea:{
            navMenu:{
                links:{
                    home: 'home',
                    skills: 'skills',
                    projects: 'projects',
                    contact: 'contact',
                    downloadCv: 'download CV'
                },
                darkMode:{
                    text: 'darkmode'
                },
                langInput:{
                    legend: 'language',
                    languages:{
                        spanish: 'spanish',
                        english: 'english'
                    }
                }
            },
            myInfo:{
                mySpeech: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quibusdam repellat dolores sed, architecto cumque vitae, molestias consequuntur nulla porro quia odit molestiae facilis numquam eveniet iusto impedit? Quasi, provident!',
                downloadCv: 'download CV'
            }
        },
        mainArea:{
            skillsSection:{
                skillsSectionTitle: 'skills',
                skillsSectionDescription: 'Currently my development goals in the area of job growth are focused on the frontend.'
            },
            projectsSection:{
                projectsSectionTitle: 'projects',
                projectsSectionDescription: 'Interesting projects that I have developed, I will update this list over time.',
                link: '>> go to project'
            },
            contactSection:{
                conactSectionTitle: 'contact',
                form: {
                    affair: 'affair',
                    message: 'message',
                    submitButton: 'submit',
                    resetButton: 'reset'
                }
            }
        },
        footerArea:{
            footerText: 'You can also contact me through my social networks.'
        }
    },
}



const LangProvider = ({children}) => {

    const [lang, setLang] = useState('es')

    useEffect(()=>{
        let storedItem = window.localStorage.getItem('lang')

        if(storedItem !== null ){

            storedItem = JSON.parse(storedItem)
            
            storedItem = storedItem.lang
            
            setLang(storedItem)

        }

    },[lang])
    
    

    const handleLang = (e)=>{
        let langOp = e.target.value
        setLang(langOp)
        window.localStorage.setItem('lang', JSON.stringify({lang: langOp}))
    }
    
    
    let data = {lang, handleLang, texts: translations[lang]}

    
    return ( 
        <LangContext.Provider  value={data}>
            {children}
        </LangContext.Provider> 
    );
}
 
export {LangProvider};

export default LangContext;
