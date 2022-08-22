const pro = document.querySelectorAll('.pro')
document.addEventListener('scroll', ()=> {
  pro.forEach(element =>{
    
    if(window. screen. width > 600){
      if (this.scrollY >= element.offsetTop-1350) {
      element.classList.add('opacity')
    }else{
      element.classList.remove('opacity')
    }
    }else{
    if (this.scrollY >= element.offsetTop-540) {
      element.classList.add('opacity')
    }else{
      element.classList.remove('opacity')
    }}
  })
})
