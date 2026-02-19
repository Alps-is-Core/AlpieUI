  function initContextMenu() {
    on(document, 'contextmenu', '[data-context-menu]', function (e) {
      e.preventDefault();
      $$('.context-menu[data-state="open"]').forEach(function (m) {
        m.setAttribute('data-state', 'closed');
      });
      var id = this.getAttribute('data-context-menu');
      var menu = document.getElementById(id);
      if (!menu) return;
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.setAttribute('data-state', 'open');
    });
    on(document, 'click', function () {
      $$('.context-menu[data-state="open"]').forEach(function (m) {
        m.setAttribute('data-state', 'closed');
      });
    });
  }
