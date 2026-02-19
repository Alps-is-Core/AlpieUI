  function initPopover() {
    on(document, 'click', '[data-popover-trigger]', function (e) {
      e.stopPropagation();
      var pop = this.closest('.popover');
      if (!pop) return;
      toggle(pop, 'data-state');
    });
    on(document, 'click', function (e) {
      $$('.popover[data-state="open"]').forEach(function (p) {
        if (!p.contains(e.target)) p.setAttribute('data-state', 'closed');
      });
    });
  }
