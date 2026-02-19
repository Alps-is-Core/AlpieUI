  function initToggle() {
    on(document, 'click', '.toggle', function () {
      var pressed = this.getAttribute('aria-pressed') === 'true';
      this.setAttribute('aria-pressed', !pressed);
      this.classList.toggle('active');

      var group = this.closest('.toggle-group');
      if (group && !group.hasAttribute('data-multiple')) {
        $$('.toggle', group).forEach(function (t) {
          if (t !== this) {
            t.setAttribute('aria-pressed', 'false');
            t.classList.remove('active');
          }
        }.bind(this));
      }
    });
  }
