document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const main = document.getElementById('main');
  const navLinks = document.querySelectorAll('.nav a');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
      main.style.marginTop = '370px'; 
    } else {
      main.style.marginTop = '70px'; 
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 600) {
        menu.classList.remove('show');
        main.style.marginTop = '70px';
      }
    });
  });
});





const darkModeBtnWrapper = document.querySelector(".footer-2");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (footerRect.top < windowHeight) {
    let overlap = windowHeight - footerRect.top + 20;
    darkModeBtnWrapper.style.bottom = overlap + "px";
  } else {
    darkModeBtnWrapper.style.bottom = "20px";
  }
});



function toggleDarkMode(iconId) {
  document.body.classList.toggle("dark-mod");
  const icon = document.getElementById(iconId);

  if (document.body.classList.contains("dark-mod")) {
    icon.src = "images/lightmode-1.png";
    icon.alt = "Light Mode";
  } else {
    icon.src = "images/darkmode-1.png";
    icon.alt = "Dark Mode";
  }
}

document.getElementById("darkmod").addEventListener("click", () => toggleDarkMode("darkmod-icon"));
document.getElementById("darkmode").addEventListener("click", () => toggleDarkMode("darkmode-icon2"));

