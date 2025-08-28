document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const main = document.getElementById('main');
  const navLinks = document.querySelectorAll('.nav a');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('show');
    // Toggle margin for main content
    if (menu.classList.contains('show')) {
      main.style.marginTop = '370px'; // navigation + menu height
    } else {
      main.style.marginTop = '70px'; // navigation height
    }
  });

  // Close menu after clicking a nav link
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
    // Footer visible → push button up
    let overlap = windowHeight - footerRect.top + 20;
    darkModeBtnWrapper.style.bottom = overlap + "px";
  } else {
    // Normal position
    darkModeBtnWrapper.style.bottom = "20px";
  }
});


document.getElementById("darkmode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mod");

  // Change icon 🌙 ↔ ☀️
  const icon = document.getElementById("darkmode-icon");
  if (document.body.classList.contains("dark-mod")) {
    icon.src = "images/lightmode-1.png"; // ☀️ (light mode)
    icon.alt = "Light Mode";
  } else {
    icon.src = "images/darkmode-1.png"; // 🌙 (dark mode)
    icon.alt = "Dark Mode";
  }
});



const btn = document.getElementById("darkmod");
const icon = document.getElementById("darkmod-icon");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.src = "images/lightmode-1.png"; // 🌞 icon for light mode
    icon.alt = "Light Mode";
  } else {
    icon.src = "images/darkmode-1.png"; // 🌙 icon for dark mode
    icon.alt = "Dark Mode";
  }
});
