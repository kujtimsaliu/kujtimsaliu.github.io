  $(document).ready(function() {
    // Add smooth scrolling to anchor links
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });

    // Add a scroll listener to highlight the active navigation item
    $(window).scroll(function() {
      var scrollPosition = $(this).scrollTop();

      // Check which section is in view and add an 'active' class to the corresponding navigation item
      $('section').each(function() {
        var sectionTop = $(this).offset().top;
        var sectionBottom = sectionTop + $(this).outerHeight();

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          var targetId = $(this).attr('id');
          $('.nav li').removeClass('active'); // Remove 'active' class from all navigation items
          $('.nav a[href="#' + targetId + '"]').closest('li').addClass('active'); // Add 'active' class to the corresponding navigation item
        }
      });
    });
  });
