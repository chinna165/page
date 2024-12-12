document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
      if (entry.isIntersecting) {
       entry.target.classList.add('visible');
      }
     });
    }, {
     threshold: 0.1
    });
    elements.forEach(element => {
     observer.observe(element);
    });

    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
     mobileMenu.classList.toggle('hidden');
    });
   });