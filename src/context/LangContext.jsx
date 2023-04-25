import React, { createContext, useEffect, useState } from 'react'

const LangContext = createContext()

const translations = {
  es: {
    headerArea: {
      navMenu: {
        links: {
          home: 'inicio',
          skills: 'habilidades',
          projects: 'proyectos',
          contact: 'contacto',
          downloadCv: 'descargar CV'
        },
        darkMode: {
          text: 'modo oscuro'
        },
        langInput: {
          legend: 'lenguaje',
          languages: {
            spanish: 'español',
            english: 'ingles'
          }
        }
      },
      myInfo: {
        mySpeech: 'soy una persona proactiva, confiable, me gusta trabajar en equipo y aprender de diferentes puntos de vista. estoy acostumbrado a trabajar por objetivos orientados a generar resultados, con exelente gestion de tiempos.',
        downloadCv: 'descargar CV'
      }
    },
    mainArea: {
      skillsSection: {
        skillsSectionTitle: 'conocimientos',
        skillsSectionDescription: 'actualmente mis metas de desarrollo en el area de crecimiento laboral estan centrados en el frontend'
      },
      projectsSection: {
        projectsSectionTitle: 'proyectos',
        projectsSectionDescription: 'proyectos interezantes que he desarrollado, ire actualizando esta lista con el tiempo.',
        link: '>> ir al proyecto'
      },
      contactSection: {
        conactSectionTitle: 'contacto',
        form: {
          affair: 'asunto',
          message: 'comentario',
          submitButton: 'enviar',
          resetButton: 'limpiar'
        }
      }
    },
    footerArea: {
      footerText: 'Tambien puedes contactarme traves de mis redes sociales.'
    }
  },
  en: {
    headerArea: {
      navMenu: {
        links: {
          home: 'home',
          skills: 'skills',
          projects: 'projects',
          contact: 'contact',
          downloadCv: 'download CV'
        },
        darkMode: {
          text: 'darkmode'
        },
        langInput: {
          legend: 'language',
          languages: {
            spanish: 'spanish',
            english: 'english'
          }
        }
      },
      myInfo: {
        mySpeech: 'I am a proactive, reliable person, I like to work in a team and learn from different points of view. I am used to working for objectives oriented to generate results, with excellent time management.',
        downloadCv: 'download CV'
      }
    },
    mainArea: {
      skillsSection: {
        skillsSectionTitle: 'skills',
        skillsSectionDescription: 'Currently my development goals in the area of job growth are focused on the frontend.'
      },
      projectsSection: {
        projectsSectionTitle: 'projects',
        projectsSectionDescription: 'Interesting projects that I have developed, I will update this list over time.',
        link: '>> go to project'
      },
      contactSection: {
        conactSectionTitle: 'contact',
        form: {
          affair: 'affair',
          message: 'message',
          submitButton: 'submit',
          resetButton: 'reset'
        }
      }
    },
    footerArea: {
      footerText: 'You can also contact me through my social networks.'
    }
  }
}

// eslint-disable-next-line react/prop-types
const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    let storedItem = window.localStorage.getItem('lang')

    if (storedItem !== null) {
      storedItem = JSON.parse(storedItem)

      storedItem = storedItem.lang

      setLang(storedItem)
    }
  }, [lang])

  const handleLang = (e) => {
    const langOp = e.target.value
    setLang(langOp)
    window.localStorage.setItem('lang', JSON.stringify({ lang: langOp }))
  }

  const data = { lang, handleLang, texts: translations[lang] }

  return (
        <LangContext.Provider value={data}>
            {children}
        </LangContext.Provider>
  )
}

export { LangProvider }

export default LangContext
