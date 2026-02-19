  function initCarousel() {
    $$('.carousel').forEach(function (carousel) {
      var track = $('.carousel-track', carousel);
      var slides = $$('.carousel-slide', carousel);
      var dots = $$('.carousel-dot', carousel);
      var idx = 0;

      function goTo(i) {
        idx = Math.max(0, Math.min(i, slides.length - 1));
        track.style.transform = 'translateX(-' + (idx * 100) + '%)';
        dots.forEach(function (d, j) { d.classList.toggle('active', j === idx); });
      }

      var prev = $('.carousel-prev', carousel);
      var next = $('.carousel-next', carousel);
      if (prev) prev.addEventListener('click', function () { goTo(idx - 1); });
      if (next) next.addEventListener('click', function () { goTo(idx + 1); });
      dots.forEach(function (dot, j) {
        dot.addEventListener('click', function () { goTo(j); });
      });

      if (dots.length) dots[0].classList.add('active');

      if (carousel.hasAttribute('data-autoplay')) {
        var ms = parseInt(carousel.getAttribute('data-autoplay')) || 5000;
        setInterval(function () { goTo((idx + 1) % slides.length); }, ms);
      }
    });
  }
