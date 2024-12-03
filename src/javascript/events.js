document.addEventListener("DOMContentLoaded", function(event) {
const btnOpenMenu = document.querySelector('.navbar__opnMenu')
const btncloseMen = document.querySelector('.navbar__clsMenu')

const navbarMenu =document.querySelector('.navbar__menu')

btnOpenMenu.addEventListener('click', ()=>{
  navbarMenu.classList.toggle('visble')
})

btncloseMen.addEventListener('click', ()=>{
  navbarMenu.classList.toggle('visble')
})

});