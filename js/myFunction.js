window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.description');
  elements.forEach(function(element) {
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    if (position < windowHeight * 0.75) {
      element.classList.add('show');
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll('.navContainer ul li a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      var targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
