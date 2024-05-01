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
