const pro = document.querySelectorAll('.fundo')
document.addEventListener('scroll', ()=> {
  pro.forEach(element =>{
  
    
    if(window. screen. width >= 500){
       if (this.scrollY >= element.offsetTop-00) {
         
      element.classList.add('opacity')
      
    }else{
      element.classList.remove('opacity')
    }
    }else{
      
    if (this.scrollY >= element.offsetTop+940) {
      element.classList.add('opacity')
      console.log(element.offsetTop+940)
    }else{
      element.classList.remove('opacity')
    }}
  })
})
