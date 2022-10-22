const toggledMenu = document.querySelector('.menu')
const toggledClass = document.querySelector('.headerBurger')
function classMenuToggle () {
    toggledClass.classList.toggle('active')
    toggledMenu.classList.toggle('active')

} 
toggledClass.addEventListener("click", classMenuToggle())
