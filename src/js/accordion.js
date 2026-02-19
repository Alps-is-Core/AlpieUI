  function initAccordion() {
    on(document, 'click', '.accordion-trigger', function () {
      var item = this.closest('.accordion-item');
      if (!item) return;
      var accordion = item.closest('.accordion');
      var isOpen = item.getAttribute('data-state') === 'open';

      if (accordion && !accordion.hasAttribute('data-multiple')) {
        $$('.accordion-item', accordion).forEach(function (i) {
          i.setAttribute('data-state', 'closed');
        });
      }
      item.setAttribute('data-state', isOpen ? 'closed' : 'open');
    });
  }
