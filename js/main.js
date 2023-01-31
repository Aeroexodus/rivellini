/*===== MOSTRAR MENÚ =====*/  
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-hamburguesa','nav-menu')

/*===== REMOVER MENÚ =====*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*======== ACORDEON =======*/
const acordeonContent = document.getElementsByClassName('acordeon__contenido'),
    acordeonHeader = document.querySelectorAll('.acordeon__cabecera')

function toggleacordeon(){
    let itemClass = this.parentNode.className

    for(i = 0; i < acordeonContent.length; i++){
        acordeonContent[i].className = 'acordeon__contenido acordeon__cerrado'
    }
    if(itemClass === 'acordeon__contenido acordeon__cerrado'){
        this.parentNode.className = 'acordeon__contenido acordeon__abierto' 
    }
}

acordeonHeader.forEach((el) =>{
    el.addEventListener('click', toggleacordeon)
})