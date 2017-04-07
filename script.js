const lis = document.querySelectorAll('[data-dropdown-item]');

lis.forEach(li => {
    li.addEventListener('click', function (ev) {
        const target = ev.target;
        if(!target.classList.contains('active')){
        const activeElements = document.querySelectorAll('[data-dropdown-item].active');
        activeElements.forEach(elem => { elem.classList.remove('active') })
        }
        ev.stopPropagation();
        if (target.dataset) {
            if (target.dataset.dropdownItem !== undefined) {
                target.classList.toggle('active');
            }
        }
    })
});
window.onclick = function (e) {
    const activeElements = document.querySelectorAll('[data-dropdown-item].active');
    activeElements.forEach(elem => { elem.classList.remove('active') })
}