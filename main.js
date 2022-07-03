const btn = document.querySelector('.ham-btn');
const nav = document.querySelector('nav');
btn.addEventListener('click', function() {
    nav.classList.toggle('show-nav');
})