window.addEventListener('scroll', function() {
  var element = document.querySelector('.description');
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (position < windowHeight * 0.75) {
      element.classList.add('show');
  }
});
