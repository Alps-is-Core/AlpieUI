  function initCollapsible() {
    on(document, 'click', '.collapsible-trigger', function () {
      var col = this.closest('.collapsible');
      if (col) toggle(col, 'data-state');
    });
  }
