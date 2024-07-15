"use strict"

const portfolioContent = document.querySelector('.portfolio-content')



window.addEventListener('DOMContentLoaded', ()=>{ getProjects() })



const createProjectsHTML = (list)=>{

    let frag = document.createDocumentFragment()

    list.forEach(item =>{

        const project = document.createElement('DIV')
        project.className = 'project'

        project.innerHTML = `
            <img class="project-img" src="${item.thumbnail}" alt="${item.title}">
            <div class="project-info">
                <div>
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <a href="${item.path}" target="_blank">go to project</a>
                </div>

            </div>
        `;

        frag.appendChild(project)
        
    })

    portfolioContent.appendChild(frag)
    
}

const getProjects = async()=>{
    
    let list = await fetch('./assets/project_list.json')
    .then(res => res.json())
    .then(res => res.projects)

    createProjectsHTML(list)

}
