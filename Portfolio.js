document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 600) {
        menu.classList.remove('show');
      }
    });
  });

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('show');
  });
});