const ul=document.querySelector('[data-dropdown-item]');

ul.addEventListener('click',function(ev){
    const target=ev.target;
    ev.stopPropagation();    
    if(target.dataset){
        if(target.dataset.dropdownItem!==undefined)
        {
            target.classList.toggle('active');
        }
    }
})

window.onclick = function(e) {
  const activeElements=document.querySelectorAll('[data-dropdown-item].active');
  activeElements.forEach(function(elem){
      elem.classList.remove('active')
  })
}