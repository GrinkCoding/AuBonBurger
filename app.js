const btn = document.querySelector('.hamburger-btn');
const navBar = document.querySelector('.navbar');
const link = document.querySelector('.link')

btn.addEventListener('click',function(){
btn.classList.toggle('active');
link.classList.toggle('active');
navBar.classList.toggle('active');
})