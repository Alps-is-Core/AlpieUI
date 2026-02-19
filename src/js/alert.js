  function initAlert() {
    on(document, 'click', '.alert-close', function () {
      var alert = this.closest('.alert');
      if (alert) {
        alert.style.opacity = '0';
        alert.style.transform = 'translateY(-4px)';
        alert.style.transition = 'opacity .2s, transform .2s';
        setTimeout(function () { alert.remove(); }, 200);
      }
    });
  }
