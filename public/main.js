const pro = document.querySelectorAll('.fundo')
const card = document.querySelector("#textoInformativo")
const projeto = document.querySelector("#projetos")
const menu = document.querySelector("#menu")
const nav = document.querySelector("#nav")
const text = document.querySelectorAll(".nav-link")
document.addEventListener('scroll', ()=> {
  text.forEach(element => {
    if(this.scrollY>=card.offsetTop-70 && this.scrollY <= projeto.offsetTop){
      
      element.classList.add("text-dark")
      element.classList.remove('text-white')
      menu.classList.remove('navbar-dark')
      nav.classList.remove('text-white')
    }else{
      element.classList.add("text-white")
      element.classList.remove('text-dark')
      menu.classList.add('navbar-dark')
    }
  })
  pro.forEach(element =>{
  
    
    if(window. screen. width >= 500){
       if (this.scrollY >= element.offsetTop) {
         
      element.classList.add('opacity')
      
      
    }
    
    }else{
      
    if (this.scrollY >= element.offsetTop+700) {
      element.classList.add('opacity')
      
    }}
  })
})
