document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-mobile');
  
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });