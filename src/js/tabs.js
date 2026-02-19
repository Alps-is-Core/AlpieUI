  function initTabs() {
    on(document, 'click', '.tabs-trigger', function () {
      var tabsRoot = this.closest('.tabs');
      if (!tabsRoot) return;
      var target = this.getAttribute('data-tab');

      $$('.tabs-trigger', tabsRoot).forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      $$('.tab-panel', tabsRoot).forEach(function (p) {
        p.classList.remove('active');
      });
      var panel = tabsRoot.querySelector('[data-tab-panel="' + target + '"]');
      if (panel) panel.classList.add('active');
    });
  }
