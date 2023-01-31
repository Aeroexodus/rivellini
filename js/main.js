/*======= MOSTRAR MENÚ =======*/  
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

/*======= REMOVER MENÚ =======*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*== SELECCIÓN ACTIVA DE MENÚ ==*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*========== ACORDEON =========*/
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

/*===== ANIMACIÓN DE SCROLL =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.inicio__data, .presentacion__imagen, .acordeon__subtitulo, .acordeon__texto',{}); 
sr.reveal('.inicio__imagen, .presentacion__subtitulo, .contacto__info, .acordeon__imagen',{delay: 300});
sr.reveal('.acordeon__data, .acordeon__cabecera, .trabajo__imagen, .inicio__social',{interval: 200}); 
sr.reveal('.contenido, .seccion',{interval: 100});