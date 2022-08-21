const pro = document.querySelectorAll('.pro')

document.addEventListener('scroll', ()=> {
  pro.forEach(element =>{
    
    if (this.scrollY >= element.offsetTop-540) {
      element.classList.add('opacity')
    }else{
      element.classList.remove('opacity')
    }
  })
})
