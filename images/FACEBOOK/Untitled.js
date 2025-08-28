 button = document.getElementById('submit');
button.addEventListener('click', function(e) {
  e.preventDefault(); // Stop form submission
  window.location.href = 'https://www.facebook.com/';
});