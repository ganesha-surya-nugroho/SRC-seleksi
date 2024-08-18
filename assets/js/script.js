// Navbar Menu 
document.getElementById('nav-bar').addEventListener('click', function() {
  const links = document.getElementById('nav-menu');
  const logo = document.getElementsByClassName('nav__name');
  const nav = document.getElementsByClassName('nav');
  window.scrollY = 0;
  links.classList.toggle('active');
  logo.classList.toggle('active');
  nav.classList.toggle('active');
});


window.onscroll = function() {
  const navbar = document.getElementById("nav");

  if (window.scrollY > 10) {
    navbar.classList.remove("transparent");
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("transparent");
  }
};


  