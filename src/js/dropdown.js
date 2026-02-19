  function initDropdown() {
    on(document, 'click', '[data-dropdown-trigger]', function (e) {
      e.stopPropagation();
      var dd = this.closest('.dropdown');
      if (!dd) return;
      var isOpen = dd.getAttribute('data-state') === 'open';
      closeAllDropdowns();
      if (!isOpen) dd.setAttribute('data-state', 'open');
    });
    on(document, 'click', function () { closeAllDropdowns(); });
    on(document, 'click', '.dropdown-item', function () { closeAllDropdowns(); });
  }

  function closeAllDropdowns() {
    $$('.dropdown[data-state="open"]').forEach(function (d) {
      d.setAttribute('data-state', 'closed');
    });
  }
