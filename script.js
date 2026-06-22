const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const scrollUpBtn = document.getElementById('scrollUpBtn');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.classList.remove('active'); 
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Хабарламаңыз жіберілді! Рахмет.');
    e.target.reset();
});