'use strict'

const mainnav= document.querySelector('.main-menu')

const mainMenuBtns = document.querySelectorAll('.main-menu > ul > li > a')
const mainMenu = document.querySelector('.main-menu > ul')
const mainMenuCheckbox = document.querySelector('.main-menu > input')

const contentSections = document.querySelectorAll('.content-section:not(.section-farewell)')

let menuPos = 0;
let hideMenuOnScroll = false

if(window.innerWidth <= 600) hideMenuOnScroll = true


if(hideMenuOnScroll){

    document.addEventListener('scroll', ()=>{
    
        let currentScroll = document.documentElement.scrollTop;
    
        if (currentScroll > menuPos) {
            mainnav.setAttribute('style', `top:-60px;`) 
        }else{
            mainnav.setAttribute('style', `top: 0px;`) 
        }
        
        menuPos = currentScroll
    })

}


const movilHiddeMenu = ()=>{
    mainMenu.style = 'transform: translateX(100%)'
    
    mainMenuCheckbox.checked = false

    setTimeout(()=>{
        mainMenu.style = ''
    },300)
} 

mainMenuBtns.forEach(btn =>{

    btn.addEventListener('click', movilHiddeMenu)

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



