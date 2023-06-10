window.addEventListener('scroll', function() {
    var scrollSections = document.querySelectorAll('.scroll-section');
    var screenHeight = window.innerHeight;
    
    scrollSections.forEach(function(section) {
      var sectionPosition = section.getBoundingClientRect().top;
      
      if (sectionPosition < screenHeight) {
        section.classList.add('show');
      }
    });
  });
  