const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'),
 navClose = document.getElementById('nav-close');



 if (navToggle) {
    navToggle.addEventListener('click',
     ()=>{
        navMenu.classList.add('show-menu')
     }
    )
 }


 if (navClose) {
    navClose.addEventListener('click',
     ()=>{
        navMenu.classList.remove('show-menu')
     }
    )
 }

  

//   enleve le menu mobile en cliquant sur un menu exemple home services ou autre lien 

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // en cliquant sur nav_link on enleve nav-menu
    navMenu.classList.remove('show-menu')
} 
navLink.forEach(n => n.addEventListener('click', linkAction))


/* AJOUTER LE BLUR TO HEADER genre transparent quand on scroll */

const blurHeader = () => {
   const header = document.getElementById('header')
 // when header est superieur a 50

  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')

}
window.addEventListener('scroll', blurHeader)



// ENVOIE D EMAIL 

 const contactForm = document.getElementById('contact-form'),
       contactMessage = document.getElementById('contact-message')

sendEmail = (e) => {
     e.preventDefault()
      // service template form-publickey  
      emailjs.sendForm('service_z6lod4j', 'template_nc9r95b', '#contact-form', 'CTFJ7jJ55paR_gWBq')
                    .then(()=>{
                        contactMessage.textContent = "Message envoyer avec success ✅ "; 

                        // remove text message after 5 seconde
                      setTimeout(() => {
                        contactMessage.textContent = ''; 
                      }, 5000);

                        // clear input
                        contactForm.reset()
                    }, () =>{ 
                        contactMessage.textContent = "Une erreur est survenus ❌  "; 
                    });
}
 
contactForm.addEventListener('submit', sendEmail)



// Scroll avec le button

 const scrollUp = () => {

    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
 }

 window.addEventListener('scroll', scrollUp )



// Scroll par section

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {

        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop -58,
              sectionId =  current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*='+sectionId+']')
              
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    }); 
}

window.addEventListener('scroll', scrollActive)


// scroll revea animation . cest un js qu on a pas ecrit mais remporter dans le site

 const sr = ScrollReveal({
      origin: 'top',
      distance : '60px',
      duration: 2000,
      delay:400,
      reset: true //  Amimation repeat 
 })

 sr.reveal(`.home__data, .home__ social, .contact__container, .footer__container`)
 sr.reveal(`.home__image`, {origin:'bottom'})
 
 sr.reveal(`.about__data, .skills__data`, {origin:'left'})
 sr.reveal(`.abo ut__image, . skills__content`, {origin:'right'})


  sr.reveal(`.services__card, .projects__card `, {interval:100}) 
 


  function myCallback (el) {
    el.classList.remove('is-visible');
    el.classList.add('is-animating');
}

ScrollReveal().reveal('#nav__logo', { beforeReset: myCallback });