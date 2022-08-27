const pro = document.querySelectorAll('.fundo')

document.addEventListener('scroll', ()=> {
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
