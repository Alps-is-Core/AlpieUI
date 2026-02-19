  function openDialog(id) {
    var overlay = document.getElementById(id);
    if (!overlay) return;
    overlay.setAttribute('data-state', 'open');
    document.body.style.overflow = 'hidden';
    var sheet = overlay.nextElementSibling;
    if (sheet && (sheet.classList.contains('sheet') || sheet.classList.contains('drawer'))) {
      sheet.setAttribute('data-state', 'open');
    }
    var first = $('[autofocus], input, button:not(.dialog-close)', overlay);
    if (first) setTimeout(function () { first.focus(); }, 100);
  }

  function closeDialog(id) {
    var overlay = document.getElementById(id);
    if (!overlay) return;
    overlay.setAttribute('data-state', 'closed');
    document.body.style.overflow = '';
    var sheet = overlay.nextElementSibling;
    if (sheet && (sheet.classList.contains('sheet') || sheet.classList.contains('drawer'))) {
      sheet.setAttribute('data-state', 'closed');
    }
  }

  Ranju.dialog = { open: openDialog, close: closeDialog };

  function initDialog() {
    on(document, 'click', '[data-dialog-open]', function (e) {
      e.preventDefault();
      openDialog(this.getAttribute('data-dialog-open'));
    });
    on(document, 'click', '[data-dialog-close]', function (e) {
      e.preventDefault();
      var overlay = this.closest('.dialog-overlay');
      if (overlay) closeDialog(overlay.id);
    });
    on(document, 'click', '.dialog-overlay', function (e) {
      if (e.target === this) closeDialog(this.id);
    });
    on(document, 'keydown', function (e) {
      if (e.key === 'Escape') {
        var open = $$('.dialog-overlay[data-state="open"]');
        if (open.length) closeDialog(open[open.length - 1].id);
        var cmd = $('.command-overlay[data-state="open"]');
        if (cmd) cmd.setAttribute('data-state', 'closed');
      }
    });
  }
