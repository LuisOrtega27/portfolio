'use strict'

const mainMenu= document.querySelector('.main-menu')

const mainMenuBtns = document.querySelectorAll('.main-menu > ul > li > a')
const contentSections = document.querySelectorAll('.content-section:not(.section-farewell)')

let menuPos = 0;
let hideMenuOnScroll = false

if(hideMenuOnScroll){

    document.addEventListener('scroll', ()=>{
    
        let currentScroll = document.documentElement.scrollTop;
    
        if (currentScroll > menuPos) {
            mainMenu.setAttribute('style', `top:-50px;`) 
        }else{
            mainMenu.setAttribute('style', `top: 0px;`) 
        }
        
        menuPos = currentScroll
    })

}


mainMenuBtns.forEach(btn =>{

    btn.addEventListener('click', ()=>{
        btn.classList.remove('active')
    })
})



const verifyVisivility = (entries)=>{
    
    let currentNode = entries[0].target 
    let parent = currentNode.parentNode
    let index = Array.from(parent.children).indexOf(currentNode)


    entries.forEach( (entry) => {
        
        if(entry.isIntersecting == true){
            mainMenuBtns[index].classList.add('active')
        }else{
            mainMenuBtns[index].classList.remove('active')
        }
    })


}


let observer = new IntersectionObserver(verifyVisivility, {root:null,rootMargin: '0px 0px 0px 0px', threshold: 0.3})


contentSections.forEach(sections => {
    observer.observe(sections)
})



